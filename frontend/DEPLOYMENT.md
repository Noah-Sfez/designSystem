# Guide de Déploiement - React Glass Components

## 🚀 Étapes de déploiement complet

### 1. Préparation du projet

```bash
# Cloner le projet actuel
git clone votre-repo
cd react-glass-components

# Installer les dépendances de build
npm install -D @rollup/plugin-node-resolve @rollup/plugin-commonjs @rollup/plugin-typescript rollup rollup-plugin-peer-deps-external rollup-plugin-postcss typescript gh-pages
```

### 2. Configuration du repository GitHub

```bash
# Créer un nouveau repository GitHub
# Nom suggéré : react-glass-components

# Initialiser Git
git init
git add .
git commit -m "Initial commit - React Glass Components v1.0.0"

# Ajouter remote
git remote add origin https://github.com/votre-nom/react-glass-components.git

# Créer et pusher
git branch -M main
git push -u origin main
```

### 3. Publication sur NPM

#### A. Créer un compte NPM
```bash
# S'inscrire sur https://www.npmjs.com/signup
# Ou se connecter si compte existant

# Se connecter en ligne de commande
npm login
```

#### B. Configurer le package
```bash
# Modifier le nom dans library-package.json
# Remplacer "@votre-nom/react-glass-components" par votre nom d'utilisateur NPM
# Exemple : "@johndoe/react-glass-components"

# Vérifier que le nom est disponible
npm search @votre-nom/react-glass-components
```

#### C. Construire et publier
```bash
# Construire la librairie
chmod +x scripts/build-library.js
node scripts/build-library.js

# Publier sur NPM
cd dist
npm publish --access public
```

### 4. Déploiement de la documentation

#### A. Configuration GitHub Pages
```bash
# Dans les settings du repository GitHub :
# Pages > Source > Deploy from a branch
# Branch : gh-pages
# Folder : / (root)
```

#### B. Déployer la documentation
```bash
# Retourner au dossier racine
cd ..

# Déployer la documentation
chmod +x scripts/deploy-docs.js
node scripts/deploy-docs.js
```

### 5. Automatisation avec GitHub Actions

#### A. Configurer les secrets
Dans votre repository GitHub :
- Settings > Secrets and variables > Actions
- Ajouter : `NPM_TOKEN` (depuis npmjs.com > Access Tokens)

#### B. Créer un tag pour déclencher la publication
```bash
# Créer un tag de version
git tag v1.0.0
git push origin v1.0.0

# GitHub Actions va automatiquement :
# 1. Construire la librairie
# 2. Publier sur NPM
# 3. Déployer la documentation
```

### 6. Utilisation dans vos projets

#### A. Installation
```bash
npm install @votre-nom/react-glass-components
# ou
yarn add @votre-nom/react-glass-components
```

#### B. Utilisation
```jsx
import { 
  ThemeProvider, 
  GlassButton, 
  GlassCard,
  Dashboard 
} from '@votre-nom/react-glass-components';

function App() {
  return (
    <ThemeProvider>
      <GlassCard>
        <GlassButton variant="primary">
          Mon bouton glassmorphism
        </GlassButton>
      </GlassCard>
    </ThemeProvider>
  );
}
```

## 🔧 Scripts disponibles

```bash
# Construction de la librairie
node scripts/build-library.js

# Déploiement de la documentation
node scripts/deploy-docs.js

# Développement local
yarn start

# Tests
yarn test
```

## 📦 Structure du package publié

```
dist/
├── index.js          # Build CommonJS
├── index.esm.js      # Build ES Modules
├── index.d.ts        # Types TypeScript
├── package.json      # Configuration NPM
├── README.md         # Documentation
├── LICENSE           # Licence MIT
└── CHANGELOG.md      # Historique des versions
```

## 🌐 URLs importantes

Après déploiement, vos URLs seront :
- **NPM Package** : https://www.npmjs.com/package/@votre-nom/react-glass-components
- **Documentation** : https://votre-nom.github.io/react-glass-components
- **Repository** : https://github.com/votre-nom/react-glass-components

## 📈 Mises à jour futures

### Pour publier une nouvelle version :
```bash
# 1. Modifier le code
# 2. Mettre à jour CHANGELOG.md
# 3. Bump version dans library-package.json
# 4. Commit et push
git add .
git commit -m "feat: nouvelle fonctionnalité"
git push

# 5. Créer un nouveau tag
git tag v1.1.0
git push origin v1.1.0

# GitHub Actions publiera automatiquement
```

## 🚨 Checklist de déploiement

- [ ] Repository GitHub créé
- [ ] Compte NPM configuré
- [ ] Nom de package disponible sur NPM
- [ ] Scripts de build testés
- [ ] Documentation construite
- [ ] GitHub Actions configurées
- [ ] Secrets NPM_TOKEN ajoutés
- [ ] Premier tag créé
- [ ] Package publié sur NPM
- [ ] Documentation déployée sur GitHub Pages

## 🎯 Résultat final

Votre librairie sera disponible :
1. **Sur NPM** pour installation dans des projets
2. **Documentation en ligne** pour les utilisateurs
3. **GitHub repository** pour les contributions
4. **CI/CD automatisé** pour les futures versions

Félicitations ! 🎉 Votre librairie React Glass Components est maintenant prête à être utilisée par la communauté !