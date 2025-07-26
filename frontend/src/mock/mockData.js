export const dashboardData = {
  users: 12547,
  revenue: 89650,
  conversion: 3.2,
  growth: 12.5
};

export const tableData = [
  {
    id: 1,
    name: 'Alice Martin',
    email: 'alice@example.com',
    status: 'Actif',
    subscription: 'Premium',
    lastLogin: '2024-01-15',
    revenue: 29.99
  },
  {
    id: 2,
    name: 'Bob Dupont',
    email: 'bob@example.com',
    status: 'Inactif',
    subscription: 'Basic',
    lastLogin: '2024-01-10',
    revenue: 9.99
  },
  {
    id: 3,
    name: 'Claire Moreau',
    email: 'claire@example.com',
    status: 'Actif',
    subscription: 'Premium',
    lastLogin: '2024-01-16',
    revenue: 29.99
  },
  {
    id: 4,
    name: 'David Bernard',
    email: 'david@example.com',
    status: 'Suspendu',
    subscription: 'Basic',
    lastLogin: '2024-01-08',
    revenue: 9.99
  },
  {
    id: 5,
    name: 'Emma Petit',
    email: 'emma@example.com',
    status: 'Actif',
    subscription: 'Premium',
    lastLogin: '2024-01-16',
    revenue: 29.99
  },
  {
    id: 6,
    name: 'François Durand',
    email: 'francois@example.com',
    status: 'Actif',
    subscription: 'Enterprise',
    lastLogin: '2024-01-15',
    revenue: 99.99
  },
  {
    id: 7,
    name: 'Gabrielle Roux',
    email: 'gabrielle@example.com',
    status: 'Actif',
    subscription: 'Basic',
    lastLogin: '2024-01-14',
    revenue: 9.99
  },
  {
    id: 8,
    name: 'Henri Blanc',
    email: 'henri@example.com',
    status: 'Inactif',
    subscription: 'Premium',
    lastLogin: '2024-01-05',
    revenue: 29.99
  },
  {
    id: 9,
    name: 'Isabelle Noir',
    email: 'isabelle@example.com',
    status: 'Actif',
    subscription: 'Enterprise',
    lastLogin: '2024-01-16',
    revenue: 99.99
  },
  {
    id: 10,
    name: 'Jean Vert',
    email: 'jean@example.com',
    status: 'Suspendu',
    subscription: 'Basic',
    lastLogin: '2024-01-07',
    revenue: 9.99
  },
  {
    id: 11,
    name: 'Karine Rose',
    email: 'karine@example.com',
    status: 'Actif',
    subscription: 'Premium',
    lastLogin: '2024-01-15',
    revenue: 29.99
  },
  {
    id: 12,
    name: 'Laurent Bleu',
    email: 'laurent@example.com',
    status: 'Actif',
    subscription: 'Enterprise',
    lastLogin: '2024-01-16',
    revenue: 99.99
  }
];

export const dropdownItems = [
  { label: 'Profil', icon: '👤' },
  { label: 'Paramètres', icon: '⚙️' },
  { label: 'Aide', icon: '❓' },
  { label: 'Déconnexion', icon: '🚪' }
];

export const metricsData = [
  {
    title: 'Utilisateurs Actifs',
    value: '12,547',
    change: '+12.5%',
    icon: '👥',
    trend: 'up',
    category: 'success',
    sparklineData: [8500, 9200, 8800, 10200, 11500, 12200, 11800, 12800, 12100, 13200, 12800, 12547]
  },
  {
    title: 'Chiffre d\'Affaires',
    value: '89,650€',
    change: '+8.2%',
    icon: '💰',
    trend: 'up',
    category: 'default',
    sparklineData: [72000, 75000, 71000, 78000, 82000, 85000, 83000, 87000, 86000, 91000, 88000, 89650]
  },
  {
    title: 'Taux de Conversion',
    value: '3.2%',
    change: '-0.5%',
    icon: '📈',
    trend: 'down',
    category: 'warning',
    sparklineData: [2.8, 3.1, 2.9, 3.3, 3.5, 3.4, 3.2, 3.6, 3.1, 3.4, 3.3, 3.2]
  },
  {
    title: 'Satisfaction Client',
    value: '4.8/5',
    change: '+0.2',
    icon: '⭐',
    trend: 'up',
    category: 'success',
    sparklineData: [4.5, 4.6, 4.4, 4.7, 4.8, 4.7, 4.6, 4.9, 4.8, 4.7, 4.8, 4.8]
  }
];

export const speedometerData = [
  {
    title: 'Performance CPU',
    value: 73,
    max: 100,
    unit: '%',
    color: 'warning'
  },
  {
    title: 'Utilisation RAM',
    value: 45,
    max: 100,
    unit: '%',
    color: 'success'
  },
  {
    title: 'Satisfaction Client',
    value: 87,
    max: 100,
    unit: '%',
    color: 'primary'
  },
  {
    title: 'Taux de Conversion',
    value: 23,
    max: 100,
    unit: '%',
    color: 'danger'
  }
];

export const panelData = [
  {
    title: 'Statistiques Utilisateurs',
    icon: '📊',
    variant: 'default',
    content: 'Analyse détaillée des comportements utilisateurs avec métriques en temps réel. Suivi des sessions actives, pages vues, temps passé sur le site et taux de rebond. Segmentation par démographie et comportement d\'achat.'
  },
  {
    title: 'Gestion des Abonnements',
    icon: '💳',
    variant: 'success',
    content: 'Suivi complet des abonnements avec renouvellements automatiques, gestion des paiements et facturation. Alertes pour les échéances, rapports de revenus récurrents et analyses de churn rate.'
  },
  {
    title: 'Support Client',
    icon: '🎧',
    variant: 'warning',
    content: 'Centre d\'aide intégré avec système de tickets, chat en direct et FAQ dynamique. Analyses de satisfaction client, temps de réponse et résolution des problèmes. Base de connaissances collaborative.'
  },
  {
    title: 'Paramètres Système',
    icon: '⚙️',
    variant: 'danger',
    content: 'Configuration avancée de l\'application avec paramètres de sécurité, options d\'administration et gestion des permissions. Logs système, monitoring des performances et gestion des sauvegardes.'
  }
];

export const tableColumns = [
  { key: 'name', label: 'Nom' },
  { key: 'email', label: 'Email' },
  { 
    key: 'status', 
    label: 'Statut',
    render: (value) => (
      <span style={{
        padding: '4px 8px',
        borderRadius: '12px',
        fontSize: '0.75rem',
        fontWeight: '500',
        backgroundColor: value === 'Actif' ? 'rgba(16, 185, 129, 0.1)' : 
                         value === 'Inactif' ? 'rgba(245, 158, 11, 0.1)' : 
                         'rgba(239, 68, 68, 0.1)',
        color: value === 'Actif' ? '#10b981' : 
               value === 'Inactif' ? '#f59e0b' : 
               '#ef4444',
        border: `1px solid ${value === 'Actif' ? 'rgba(16, 185, 129, 0.2)' : 
                              value === 'Inactif' ? 'rgba(245, 158, 11, 0.2)' : 
                              'rgba(239, 68, 68, 0.2)'}`
      }}>
        {value}
      </span>
    )
  },
  { 
    key: 'subscription', 
    label: 'Abonnement',
    render: (value) => (
      <span style={{
        padding: '4px 8px',
        borderRadius: '12px',
        fontSize: '0.75rem',
        fontWeight: '500',
        backgroundColor: value === 'Enterprise' ? 'rgba(99, 102, 241, 0.1)' : 
                         value === 'Premium' ? 'rgba(139, 92, 246, 0.1)' : 
                         'rgba(6, 182, 212, 0.1)',
        color: value === 'Enterprise' ? '#6366f1' : 
               value === 'Premium' ? '#8b5cf6' : 
               '#06b6d4',
        border: `1px solid ${value === 'Enterprise' ? 'rgba(99, 102, 241, 0.2)' : 
                              value === 'Premium' ? 'rgba(139, 92, 246, 0.2)' : 
                              'rgba(6, 182, 212, 0.2)'}`
      }}>
        {value}
      </span>
    )
  },
  { key: 'lastLogin', label: 'Dernière Connexion' },
  { 
    key: 'revenue', 
    label: 'Revenue',
    render: (value) => (
      <span style={{ 
        fontWeight: '600',
        color: 'var(--color-text)'
      }}>
        {value}€
      </span>
    )
  }
];

export const statsData = [
  {
    title: 'Revenus Totaux',
    value: 89650,
    previousValue: 82340,
    icon: '💰',
    color: 'success',
    format: 'currency',
    subtitle: 'Revenus générés ce mois'
  },
  {
    title: 'Utilisateurs Actifs',
    value: 12547,
    previousValue: 11230,
    icon: '👥',
    color: 'primary',
    format: 'number',
    subtitle: 'Utilisateurs connectés dans les 30 derniers jours'
  },
  {
    title: 'Taux de Conversion',
    value: 3.2,
    previousValue: 3.7,
    icon: '📈',
    color: 'warning',
    format: 'percentage',
    subtitle: 'Conversions visiteurs en clients'
  },
  {
    title: 'Satisfaction Client',
    value: 4.8,
    previousValue: 4.6,
    icon: '⭐',
    color: 'info',
    format: 'number',
    subtitle: 'Note moyenne sur 5'
  }
];

export const timelineData = [
  {
    title: 'Lancement de la v2.0',
    description: 'Déploiement réussi de la nouvelle version avec interface redesignée',
    time: '10:30',
    status: 'completed',
    icon: '🚀',
    color: '#10b981'
  },
  {
    title: 'Migration base de données',
    description: 'Migration en cours vers la nouvelle infrastructure cloud',
    time: '14:15',
    status: 'active',
    icon: '🔄',
    color: '#6366f1'
  },
  {
    title: 'Formation équipe',
    description: 'Session de formation sur les nouvelles fonctionnalités',
    time: '16:00',
    status: 'pending',
    icon: '🎓',
    color: '#f59e0b'
  },
  {
    title: 'Maintenance serveur',
    description: 'Maintenance programmée des serveurs de production',
    time: '22:00',
    status: 'pending',
    icon: '🔧',
    color: '#6b7280'
  }
];

export const userProfileData = {
  name: 'Marie Dubois',
  email: 'marie.dubois@example.com',
  role: 'Lead Developer',
  status: 'online',
  verified: true,
  joinDate: '2022-03-15',
  location: 'Lyon, France',
  bio: 'Développeuse senior spécialisée en React et Node.js. Passionnée par l\'UX et les nouvelles technologies. Mentor pour les développeurs juniors.',
  stats: {
    projects: 42,
    contributions: 1247,
    followers: 2840
  },
  badges: ['Pro', 'Verified', 'Top Contributor', 'Mentor'],
  socialLinks: {
    twitter: '@mariedubois',
    linkedin: 'marie-dubois-dev',
    github: 'mariedubois'
  }
};

export const progressData = [
  {
    label: 'Développement Frontend',
    value: 87,
    color: 'primary',
    size: 'md',
    striped: true,
    animated: true
  },
  {
    label: 'Tests Unitaires',
    value: 65,
    color: 'warning',
    size: 'md',
    glowing: true
  },
  {
    label: 'Documentation',
    value: 42,
    color: 'danger',
    size: 'lg',
    animated: true
  },
  {
    label: 'Déploiement',
    value: 95,
    color: 'success',
    size: 'md',
    striped: true,
    glowing: true
  }
];