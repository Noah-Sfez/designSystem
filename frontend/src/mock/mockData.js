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
    content: 'Analyse détaillée des comportements utilisateurs, sessions actives et tendances d\'utilisation.'
  },
  {
    title: 'Gestion des Abonnements',
    icon: '💳',
    content: 'Suivi des abonnements, renouvellements automatiques et gestion des paiements.'
  },
  {
    title: 'Support Client',
    icon: '🎧',
    content: 'Centre d\'aide, tickets de support et FAQ pour améliorer l\'expérience utilisateur.'
  },
  {
    title: 'Paramètres Système',
    icon: '⚙️',
    content: 'Configuration avancée, paramètres de sécurité et options d\'administration.'
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
        padding: '0.25rem 0.5rem',
        borderRadius: '4px',
        fontSize: '0.75rem',
        fontWeight: '500',
        backgroundColor: value === 'Actif' ? '#10b98140' : value === 'Inactif' ? '#f59e0b40' : '#ef444440',
        color: value === 'Actif' ? '#10b981' : value === 'Inactif' ? '#f59e0b' : '#ef4444'
      }}>
        {value}
      </span>
    )
  },
  { key: 'subscription', label: 'Abonnement' },
  { key: 'lastLogin', label: 'Dernière Connexion' },
  { 
    key: 'revenue', 
    label: 'Revenue',
    render: (value) => `${value}€`
  }
];