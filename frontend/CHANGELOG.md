# Changelog

Toutes les modifications notables de ce projet seront documentées dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
et ce projet adhère au [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-01-26

### Ajouté
- **Composants UI de base**
  - GlassButton avec 4 variantes (primary, secondary, accent, ghost)
  - GlassInput avec validation et focus states
  - GlassCard avec effets glassmorphism
  - GlassModal avec backdrop blur
  - GlassDropdown avec séparateurs et raccourcis
  - ProgressBar avec animations et effets
  - Badge avec variantes et options (dot, pulse, removable)
  - ThemeSwitcher pour changer de thème

- **Composants de chargement**
  - LoadingSpinner avec dégradés
  - PulseLoader avec synchronisation
  - WaveLoader avec animations fluides

- **Composants SaaS**
  - Dashboard interactif avec graphiques
  - MetricCard avec sparklines
  - StatsCard avec comparaison temporelle
  - DataTable avec tri, recherche, pagination et sélection
  - CollapsiblePanel avec variantes thématiques
  - Speedometer avec animations circulaires
  - Timeline pour affichage d'événements
  - UserProfileCard avec variantes premium
  - LineChart et BarChart avec SVG

- **Système de thèmes**
  - ThemeProvider avec 3 thèmes (Glassmorphism, Cyberpunk, Minimal)
  - Mode sombre/clair pour chaque thème
  - Variables CSS dynamiques
  - Persistence du thème en localStorage

- **Système de notifications**
  - ToastProvider avec 4 types de notifications
  - Animations d'entrée/sortie
  - Gestion automatique des durées

### Fonctionnalités
- ✨ Design glassmorphism moderne
- 🎨 Système de thèmes avancé avec 3 thèmes
- 📱 Design responsive
- ⚡ Animations 60fps optimisées
- 🔧 API simple et intuitive
- 📊 Composants SaaS professionnels
- 🌈 Variables CSS personnalisables

### Technique
- React 19.0.0 support
- TypeScript ready
- Tree-shaking optimisé
- Bundle size optimisé
- Peer dependencies configurées
- ESM et CJS support