# Exemples d'utilisation - React Glass Components

## 🎯 Cas d'usage typiques

### 1. Application SaaS complète

```jsx
import React from 'react';
import {
  ThemeProvider,
  Dashboard,
  MetricCard,
  DataTable,
  GlassCard,
  GlassButton,
  ThemeSwitcher
} from '@votre-nom/react-glass-components';

function SaaSApp() {
  const dashboardData = {
    users: 12547,
    revenue: 89650,
    conversion: 3.2,
    growth: 12.5
  };

  const metricsData = [
    {
      title: 'Utilisateurs Actifs',
      value: '12,547',
      change: '+12.5%',
      icon: '👥',
      trend: 'up',
      sparklineData: [8500, 9200, 8800, 10200, 11500, 12547]
    },
    // ... autres métriques
  ];

  return (
    <ThemeProvider>
      <div className="saas-app">
        <header>
          <h1>Mon Dashboard SaaS</h1>
          <ThemeSwitcher />
        </header>
        
        <main>
          <Dashboard data={dashboardData} />
          
          <div className="metrics-grid">
            {metricsData.map((metric, index) => (
              <MetricCard key={index} {...metric} />
            ))}
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}
```

### 2. Formulaire avec validation

```jsx
import React, { useState } from 'react';
import {
  GlassCard,
  GlassInput,
  GlassButton,
  Badge,
  ProgressBar,
  useToast
} from '@votre-nom/react-glass-components';

function SignupForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulation de validation
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email requis';
    if (!formData.password) newErrors.password = 'Mot de passe requis';
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Les mots de passe ne correspondent pas';
    }
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      // Simulation de progression
      for (let i = 0; i <= 100; i += 10) {
        setProgress(i);
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      
      toast.success('Compte créé !', 'Bienvenue dans notre plateforme');
    } else {
      toast.error('Erreur de validation', 'Veuillez corriger les erreurs');
    }
    
    setLoading(false);
  };

  return (
    <GlassCard style={{ maxWidth: '400px', margin: '2rem auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2>Créer un compte</h2>
        <Badge variant="success" dot>Gratuit</Badge>
      </div>
      
      <form onSubmit={handleSubmit}>
        <GlassInput
          label="Email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          error={errors.email}
          placeholder="votre@email.com"
        />
        
        <GlassInput
          label="Mot de passe"
          type="password"
          value={formData.password}
          onChange={(e) => setFormData({...formData, password: e.target.value})}
          error={errors.password}
          placeholder="••••••••"
        />
        
        <GlassInput
          label="Confirmer le mot de passe"
          type="password"
          value={formData.confirmPassword}
          onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
          error={errors.confirmPassword}
          placeholder="••••••••"
        />
        
        {loading && (
          <ProgressBar
            value={progress}
            label="Création du compte..."
            color="primary"
            animated
          />
        )}
        
        <GlassButton
          type="submit"
          variant="primary"
          disabled={loading}
          style={{ width: '100%', marginTop: '1rem' }}
        >
          {loading ? 'Création...' : 'Créer mon compte'}
        </GlassButton>
      </form>
    </GlassCard>
  );
}
```

### 3. Système de gestion d'utilisateurs

```jsx
import React, { useState } from 'react';
import {
  DataTable,
  UserProfileCard,
  GlassModal,
  GlassButton,
  Badge,
  Timeline
} from '@votre-nom/react-glass-components';

function UserManagement() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const users = [
    {
      id: 1,
      name: 'Marie Dubois',
      email: 'marie@example.com',
      status: 'Actif',
      subscription: 'Premium',
      lastLogin: '2024-01-15',
      revenue: 29.99
    },
    // ... autres utilisateurs
  ];

  const columns = [
    { key: 'name', label: 'Nom' },
    { key: 'email', label: 'Email' },
    { 
      key: 'status', 
      label: 'Statut',
      render: (value) => (
        <Badge 
          variant={value === 'Actif' ? 'success' : 'warning'}
          dot
        >
          {value}
        </Badge>
      )
    },
    { key: 'subscription', label: 'Abonnement' },
    {
      key: 'actions',
      label: 'Actions',
      render: (_, user) => (
        <GlassButton
          size="sm"
          variant="ghost"
          onClick={() => {
            setSelectedUser(user);
            setShowModal(true);
          }}
        >
          Voir profil
        </GlassButton>
      )
    }
  ];

  const userActivity = [
    {
      title: 'Connexion',
      description: 'Dernière connexion depuis Paris',
      time: '10:30',
      status: 'completed',
      icon: '🔐'
    },
    {
      title: 'Mise à jour profil',
      description: 'Modification des informations personnelles',
      time: '09:15',
      status: 'completed',
      icon: '👤'
    },
    {
      title: 'Paiement',
      description: 'Renouvellement abonnement Premium',
      time: '08:00',
      status: 'completed',
      icon: '💳'
    }
  ];

  return (
    <div>
      <h1>Gestion des Utilisateurs</h1>
      
      <DataTable
        title="Liste des utilisateurs"
        data={users}
        columns={columns}
        searchable
        sortable
        pagination
        pageSize={10}
        actions={[
          { 
            label: 'Exporter sélection', 
            onClick: (selectedRows) => {
              console.log('Export users:', selectedRows);
            }
          },
          { 
            label: 'Envoyer email', 
            onClick: (selectedRows) => {
              console.log('Send email to:', selectedRows);
            }
          }
        ]}
        filters={[
          {
            key: 'status',
            label: 'Statut',
            options: [
              { value: 'Actif', label: 'Actif' },
              { value: 'Inactif', label: 'Inactif' }
            ]
          }
        ]}
      />

      <GlassModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Profil Utilisateur"
        size="lg"
      >
        {selectedUser && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <UserProfileCard
              user={selectedUser}
              showStats
              showBadges
              actions={[
                { label: 'Contacter', onClick: () => {} },
                { label: 'Suspendre', onClick: () => {} }
              ]}
            />
            
            <div>
              <h3>Activité récente</h3>
              <Timeline items={userActivity} />
            </div>
          </div>
        )}
      </GlassModal>
    </div>
  );
}
```

### 4. Dashboard analytique

```jsx
import React, { useState } from 'react';
import {
  Dashboard,
  Speedometer,
  StatsCard,
  CollapsiblePanel,
  LineChart,
  BarChart,
  ProgressBar
} from '@votre-nom/react-glass-components';

function AnalyticsDashboard() {
  const [timeRange, setTimeRange] = useState('7d');
  
  const kpiData = [
    {
      title: 'Revenus',
      value: 89650,
      previousValue: 82340,
      format: 'currency',
      color: 'success'
    },
    {
      title: 'Visiteurs',
      value: 12547,
      previousValue: 11230,
      format: 'number',
      color: 'primary'
    },
    {
      title: 'Conversion',
      value: 3.2,
      previousValue: 3.7,
      format: 'percentage',
      color: 'warning'
    }
  ];

  const performanceData = [
    { title: 'CPU', value: 73, color: 'warning' },
    { title: 'RAM', value: 45, color: 'success' },
    { title: 'Disk', value: 89, color: 'danger' }
  ];

  const projectProgress = [
    { label: 'Frontend', value: 87, color: 'primary' },
    { label: 'Backend', value: 65, color: 'secondary' },
    { label: 'Tests', value: 42, color: 'warning' },
    { label: 'Déploiement', value: 95, color: 'success' }
  ];

  return (
    <div className="analytics-dashboard">
      <header style={{ marginBottom: '2rem' }}>
        <h1>Analytics Dashboard</h1>
        <div style={{ display: 'flex', gap: '1rem' }}>
          {['24h', '7d', '30d', '90d'].map(range => (
            <GlassButton
              key={range}
              size="sm"
              variant={timeRange === range ? 'primary' : 'ghost'}
              onClick={() => setTimeRange(range)}
            >
              {range}
            </GlassButton>
          ))}
        </div>
      </header>

      {/* KPIs */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
        {kpiData.map((kpi, index) => (
          <StatsCard
            key={index}
            title={kpi.title}
            value={kpi.value}
            previousValue={kpi.previousValue}
            format={kpi.format}
            color={kpi.color}
            animated
          />
        ))}
      </div>

      {/* Performance */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
        {performanceData.map((perf, index) => (
          <Speedometer
            key={index}
            title={perf.title}
            value={perf.value}
            color={perf.color}
            animated
          />
        ))}
      </div>

      {/* Progression des projets */}
      <CollapsiblePanel
        title="Progression des Projets"
        icon="📊"
        defaultExpanded
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {projectProgress.map((project, index) => (
            <ProgressBar
              key={index}
              label={project.label}
              value={project.value}
              color={project.color}
              showPercentage
              animated
            />
          ))}
        </div>
      </CollapsiblePanel>
    </div>
  );
}
```

### 5. Thème personnalisé

```jsx
import React from 'react';
import { ThemeProvider, useTheme } from '@votre-nom/react-glass-components';

// Thème personnalisé
const customTheme = {
  name: 'Custom',
  colors: {
    light: {
      primary: '#ff6b6b',
      secondary: '#4ecdc4',
      accent: '#45b7d1',
      background: '#f8f9fa',
      surface: 'rgba(255, 255, 255, 0.8)',
      text: '#2d3748',
      textMuted: '#718096',
      border: 'rgba(45, 55, 72, 0.1)',
      shadow: 'rgba(0, 0, 0, 0.1)'
    },
    dark: {
      primary: '#ff8e8e',
      secondary: '#6ee7dd',
      accent: '#64c5e8',
      background: '#1a202c',
      surface: 'rgba(255, 255, 255, 0.1)',
      text: '#f7fafc',
      textMuted: '#a0aec0',
      border: 'rgba(255, 255, 255, 0.2)',
      shadow: 'rgba(0, 0, 0, 0.3)'
    }
  }
};

function CustomThemeApp() {
  return (
    <ThemeProvider customThemes={{ custom: customTheme }}>
      <MyApp />
    </ThemeProvider>
  );
}

function MyApp() {
  const { switchTheme } = useTheme();
  
  React.useEffect(() => {
    switchTheme('custom');
  }, [switchTheme]);

  return (
    <div>
      {/* Votre application avec le thème personnalisé */}
    </div>
  );
}
```

## 🔧 Intégration avec des frameworks

### Next.js

```jsx
// pages/_app.js
import { ThemeProvider } from '@votre-nom/react-glass-components';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
```

### Gatsby

```jsx
// gatsby-browser.js
import { ThemeProvider } from '@votre-nom/react-glass-components';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);
```

### Vue.js (avec vue-react-wrapper)

```vue
<template>
  <div>
    <react-component :component="GlassButton" :props="buttonProps" />
  </div>
</template>

<script>
import { GlassButton } from '@votre-nom/react-glass-components';

export default {
  data() {
    return {
      GlassButton,
      buttonProps: {
        variant: 'primary',
        onClick: this.handleClick
      }
    };
  }
};
</script>
```

Ces exemples montrent la flexibilité et la puissance de votre librairie pour créer des applications modernes et interactives ! 🚀