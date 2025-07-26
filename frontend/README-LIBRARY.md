# React Glass Components

[![npm version](https://badge.fury.io/js/%40votre-nom%2Freact-glass-components.svg)](https://badge.fury.io/js/%40votre-nom%2Freact-glass-components)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Librairie moderne de composants React avec design glassmorphism et système de thèmes avancé, parfaite pour créer des applications SaaS élégantes.

## ✨ Fonctionnalités

- 🎨 **Design Glassmorphism** : Effets de transparence et de flou modernes
- 🌈 **Système de thèmes** : 3 thèmes (Glassmorphism, Cyberpunk, Minimal) avec mode sombre/clair
- 🧩 **Composants complets** : Plus de 20 composants prêts à l'emploi
- 📊 **Composants SaaS** : Dashboard, métriques, tableaux, graphiques
- 🔄 **Animations fluides** : Micro-interactions et transitions smoothes
- 📱 **Responsive** : Compatible mobile et desktop
- ⚡ **Performance** : Optimisé pour la production

## 🚀 Installation

```bash
npm install @votre-nom/react-glass-components
```

## 📖 Utilisation de base

### Configuration du ThemeProvider

```jsx
import { ThemeProvider, GlassButton } from '@votre-nom/react-glass-components';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <GlassButton variant="primary">
          Mon bouton glassmorphism
        </GlassButton>
      </div>
    </ThemeProvider>
  );
}
```

### Composants UI de base

```jsx
import {
  GlassButton,
  GlassInput,
  GlassCard,
  GlassModal,
  Badge,
  ProgressBar
} from '@votre-nom/react-glass-components';

function MyComponent() {
  return (
    <GlassCard>
      <GlassInput label="Email" placeholder="email@example.com" />
      <ProgressBar value={75} label="Progression" />
      <Badge variant="success">Nouveau</Badge>
      <GlassButton variant="primary">Valider</GlassButton>
    </GlassCard>
  );
}
```

### Composants SaaS

```jsx
import {
  Dashboard,
  MetricCard,
  DataTable,
  Speedometer
} from '@votre-nom/react-glass-components';

function SaaSApp() {
  const data = {
    users: 12547,
    revenue: 89650,
    conversion: 3.2,
    growth: 12.5
  };

  return (
    <div>
      <Dashboard data={data} />
      <MetricCard
        title="Utilisateurs Actifs"
        value="12,547"
        change="+12.5%"
        icon="👥"
        trend="up"
      />
      <Speedometer
        title="Performance"
        value={87}
        color="success"
        animated
      />
    </div>
  );
}
```

## 🎨 Thèmes disponibles

- **Glassmorphism** : Design moderne avec effets de transparence
- **Cyberpunk** : Couleurs néon et esthétique futuriste
- **Minimal** : Design épuré et professionnel

```jsx
import { useTheme } from '@votre-nom/react-glass-components';

function ThemeSelector() {
  const { switchTheme, toggleMode } = useTheme();

  return (
    <div>
      <button onClick={() => switchTheme('glassmorphism')}>
        Glassmorphism
      </button>
      <button onClick={() => switchTheme('cyberpunk')}>
        Cyberpunk
      </button>
      <button onClick={() => switchTheme('minimal')}>
        Minimal
      </button>
      <button onClick={toggleMode}>
        Toggle Dark/Light
      </button>
    </div>
  );
}
```

## 📊 Composants disponibles

### Composants UI
- GlassButton
- GlassInput
- GlassCard
- GlassModal
- GlassDropdown
- ProgressBar
- Badge
- ThemeSwitcher

### Loaders
- LoadingSpinner
- PulseLoader
- WaveLoader

### Composants SaaS
- Dashboard
- MetricCard
- StatsCard
- DataTable
- CollapsiblePanel
- Speedometer
- Timeline
- UserProfileCard
- LineChart
- BarChart

## 🔧 Props API

### GlassButton
```jsx
<GlassButton
  variant="primary | secondary | accent | ghost"
  size="sm | md | lg"
  disabled={boolean}
  onClick={function}
>
  Contenu
</GlassButton>
```

### DataTable
```jsx
<DataTable
  data={array}
  columns={array}
  searchable={boolean}
  sortable={boolean}
  pagination={boolean}
  pageSize={number}
  actions={array}
  filters={array}
/>
```

[Voir la documentation complète](https://votre-nom.github.io/react-glass-components)

## 🤝 Contribution

Les contributions sont les bienvenues ! Consultez le [guide de contribution](CONTRIBUTING.md).

## 📄 License

MIT © [Votre Nom](https://github.com/votre-nom)

## 🔗 Liens utiles

- [Documentation complète](https://votre-nom.github.io/react-glass-components)
- [Exemples Storybook](https://storybook.votre-nom.com)
- [Repository GitHub](https://github.com/votre-nom/react-glass-components)
- [NPM Package](https://www.npmjs.com/package/@votre-nom/react-glass-components)