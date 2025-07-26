# Guide de Contribution

Merci de votre intérêt pour contribuer à React Glass Components ! 🎉

## 🚀 Comment contribuer

### 1. Fork et Clone
```bash
git clone https://github.com/votre-nom/react-glass-components.git
cd react-glass-components
npm install
```

### 2. Créer une branche
```bash
git checkout -b feature/nouveau-composant
# ou
git checkout -b fix/correction-bug
```

### 3. Développer
```bash
# Lancer le serveur de développement
npm start

# Lancer les tests
npm test

# Lancer la documentation
npm run storybook
```

### 4. Tester
```bash
# Tests unitaires
npm test

# Tests de build
npm run build

# Vérifier le linting
npm run lint
```

### 5. Commit et Push
```bash
git add .
git commit -m "feat: ajouter nouveau composant XYZ"
git push origin feature/nouveau-composant
```

### 6. Créer une Pull Request
- Titre clair et descriptif
- Description détaillée des changements
- Screenshots si modifications visuelles
- Tests ajoutés/modifiés

## 📝 Standards de code

### Conventions de nommage
- **Composants** : PascalCase (`GlassButton`)
- **Fichiers** : PascalCase pour les composants (`GlassButton.jsx`)
- **Props** : camelCase (`variant`, `isDisabled`)
- **Styles** : camelCase (`buttonStyles`, `containerStyles`)

### Structure des composants
```jsx
import React from 'react';
import { useTheme } from '../../themes/ThemeProvider';

export const MonComposant = ({ 
  variant = 'default',
  size = 'md',
  disabled = false,
  className = '',
  children,
  ...props 
}) => {
  const { theme } = useTheme();

  const baseStyles = {
    // styles de base
  };

  // Logique du composant

  return (
    <div
      style={baseStyles}
      className={`mon-composant ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
```

### Props obligatoires
- `className` : pour permettre la customisation
- `...props` : pour la flexibilité
- Props par défaut avec destructuring

## 🎨 Guidelines de design

### Glassmorphism
- Utilisez `backdrop-filter: blur()`
- Transparence avec `rgba()`
- Bordures subtiles
- Ombres douces

### Animations
- Transitions fluides (0.2s à 0.3s)
- Courbes d'accélération : `cubic-bezier(0.4, 0, 0.2, 1)`
- Hover states subtils
- 60fps optimisé

### Responsive
- Mobile first
- Breakpoints standard
- Typographie adaptative

## 🧪 Tests

### Tests unitaires
```jsx
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '../themes/ThemeProvider';
import { MonComposant } from './MonComposant';

const renderWithTheme = (component) => {
  return render(
    <ThemeProvider>
      {component}
    </ThemeProvider>
  );
};

describe('MonComposant', () => {
  it('should render correctly', () => {
    renderWithTheme(<MonComposant>Test</MonComposant>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
```

### Tests visuels
- Screenshots dans Storybook
- Tests d'accessibilité
- Tests de responsive

## 📚 Documentation

### Storybook
```jsx
export default {
  title: 'Components/MonComposant',
  component: MonComposant,
  parameters: {
    docs: {
      description: {
        component: 'Description du composant'
      }
    }
  }
};

export const Default = {
  args: {
    children: 'Contenu par défaut'
  }
};
```

### Props documentation
```jsx
MonComposant.propTypes = {
  variant: PropTypes.oneOf(['default', 'primary', 'secondary']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node
};
```

## 🔄 Workflow

### Commits
Format : `type(scope): description`

Types :
- `feat`: Nouvelle fonctionnalité
- `fix`: Correction de bug
- `docs`: Documentation
- `style`: Styles (formatting, etc.)
- `refactor`: Refactoring
- `test`: Tests
- `chore`: Maintenance

Exemples :
```bash
feat(button): ajouter variante ghost
fix(modal): corriger problème de focus
docs(readme): mettre à jour installation
```

### Pull Requests
- Titre descriptif
- Description détaillée
- Checklist complétée
- Screenshots/GIFs si nécessaire

## 🚀 Release

### Versioning (Semantic Versioning)
- `MAJOR.MINOR.PATCH`
- `MAJOR`: Breaking changes
- `MINOR`: Nouvelles fonctionnalités
- `PATCH`: Bug fixes

### Process
1. Créer une PR vers `main`
2. Review et approbation
3. Merge dans `main`
4. Tag de version : `git tag v1.0.0`
5. Push du tag : `git push origin v1.0.0`
6. GitHub Actions publie automatiquement

## 🤝 Code of Conduct

- Respectueux et inclusif
- Constructif dans les reviews
- Patience avec les nouveaux contributeurs
- Focus sur l'amélioration continue

## ❓ Questions

Pour toute question :
- Ouvrir une issue
- Contacter par email
- Rejoindre le Discord/Slack

Merci pour votre contribution ! 🙏