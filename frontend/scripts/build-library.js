#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Construction de la librairie...');

// Nettoyer le dossier dist
if (fs.existsSync('dist')) {
  fs.rmSync('dist', { recursive: true });
}

// Créer le dossier dist
fs.mkdirSync('dist');

// Construire avec Rollup
console.log('📦 Build avec Rollup...');
try {
  execSync('npx rollup -c', { stdio: 'inherit' });
  console.log('✅ Build Rollup terminé');
} catch (error) {
  console.error('❌ Erreur lors du build Rollup:', error.message);
  process.exit(1);
}

// Copier les fichiers nécessaires
console.log('📄 Copie des fichiers...');

// Copier le package.json avec les bonnes configurations
const packageJson = JSON.parse(fs.readFileSync('library-package.json', 'utf8'));
fs.writeFileSync('dist/package.json', JSON.stringify(packageJson, null, 2));

// Copier README
fs.copyFileSync('README-LIBRARY.md', 'dist/README.md');

// Copier LICENSE
fs.copyFileSync('LICENSE', 'dist/LICENSE');

// Copier CHANGELOG
fs.copyFileSync('CHANGELOG.md', 'dist/CHANGELOG.md');

console.log('✅ Librairie construite avec succès dans le dossier dist/');
console.log('📋 Prochaines étapes :');
console.log('  1. cd dist');
console.log('  2. npm login');
console.log('  3. npm publish --access public');