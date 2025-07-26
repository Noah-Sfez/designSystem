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
    trend: 'up'
  },
  {
    title: 'Chiffre d\'Affaires',
    value: '89,650€',
    change: '+8.2%',
    icon: '💰',
    trend: 'up'
  },
  {
    title: 'Taux de Conversion',
    value: '3.2%',
    change: '-0.5%',
    icon: '📈',
    trend: 'down'
  },
  {
    title: 'Satisfaction Client',
    value: '4.8/5',
    change: '+0.2',
    icon: '⭐',
    trend: 'up'
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