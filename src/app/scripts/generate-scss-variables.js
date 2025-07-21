const fs = require('fs');
const path = require('path');

const tokenFiles = [
  'src/app/styles/tokens/_colors.tokens.json',
  'src/app/styles/tokens/_spacing.tokens.json',
  'src/app/styles/tokens/_typography.tokens.json',
];

let output = '';

// Ensure dist folder exists
const distDir = 'src/app/styles/dist';
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

tokenFiles.forEach((filePath) => {
  const tokens = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const prefix = path.basename(filePath).split('.')[0].replace(/^_/, '');

  Object.entries(tokens).forEach(([key, value]) => {
    output += `$${prefix}-${key}: ${value};\n`;
  });
});

fs.writeFileSync(path.join(distDir, '_variables.scss'), output);
console.log('✅ SCSS variables generated in dist/_variables.scss');
