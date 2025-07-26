#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('📚 Déploiement de la documentation...');

// Construire la documentation
console.log('🔨 Construction de la documentation...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Documentation construite');
} catch (error) {
  console.error('❌ Erreur lors de la construction:', error.message);
  process.exit(1);
}

// Créer CNAME pour GitHub Pages (optionnel)
const domain = process.env.CUSTOM_DOMAIN;
if (domain) {
  fs.writeFileSync('build/CNAME', domain);
  console.log(`🌐 CNAME créé pour ${domain}`);
}

// Déployer sur GitHub Pages
console.log('🚀 Déploiement sur GitHub Pages...');
try {
  execSync('npx gh-pages -d build', { stdio: 'inherit' });
  console.log('✅ Documentation déployée sur GitHub Pages');
} catch (error) {
  console.error('❌ Erreur lors du déploiement:', error.message);
  console.log('💡 Assurez-vous que gh-pages est installé : npm install -g gh-pages');
  process.exit(1);
}

console.log('🎉 Documentation déployée avec succès !');
console.log('🔗 URL : https://votre-nom.github.io/react-glass-components');