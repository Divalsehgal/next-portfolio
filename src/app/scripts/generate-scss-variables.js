
const fs = require('fs');
const path = require('path');

// Helper to write SCSS variables from a token JSON file
function writeScssVariablesFromTokens(tokenPath, outPath, prefix, header) {
  if (!fs.existsSync(tokenPath)) return;
  const tokens = JSON.parse(fs.readFileSync(tokenPath, 'utf8'));
  const lines = Object.entries(tokens)
    .map(([key, value]) => `$${prefix}-${key}: ${value};`)
    .join('\n');
  fs.writeFileSync(outPath, (header ? header + '\n' : '') + lines + '\n');
}

// Ensure dist folder exists
const distDir = 'src/app/styles/dist';
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Main design tokens to _variables.scss
const tokenFiles = [
  { path: 'src/app/styles/tokens/_colors.tokens.json', prefix: 'color' },
  { path: 'src/app/styles/tokens/_spacing.tokens.json', prefix: 'spacing' },
  { path: 'src/app/styles/tokens/_typography.tokens.json', prefix: 'typography' },
  { path: 'src/app/styles/tokens/_media.tokens.json', prefix: 'media' },

];

let output = '';
tokenFiles.forEach(({ path: filePath, prefix }) => {
  if (!fs.existsSync(filePath)) return;
  const tokens = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  Object.entries(tokens).forEach(([key, value]) => {
    output += `$${prefix}-${key}: ${value};\n`;
  });
});
fs.writeFileSync(path.join(distDir, '_variables.scss'), output);
console.log('✅ SCSS variables generated in dist/_variables.scss');

// Media tokens to _media.scss
const mediaTokensPath = path.resolve(__dirname, '../styles/tokens/_media.tokens.json');
const mediaScssPath = path.resolve(__dirname, '../styles/abstracts/_media.scss');
writeScssVariablesFromTokens(
  mediaTokensPath,
  mediaScssPath,
  'media',
  '// Auto-generated media query variables from _media.tokens.json'
);
if (fs.existsSync(mediaScssPath)) {
  console.log('✅ SCSS media variables generated in abstracts/_media.scss');
}
