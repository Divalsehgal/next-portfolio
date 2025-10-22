const fs = require('fs');
const path = require('path');

function getPrefixedVariableName(prefix, key) {
  const combined = `${prefix}-${key}`; // Use hyphen to separate for camelCase conversion
  return toCamelCase(combined);
}

// Convert kebab-case or snake_case to camelCase
function toCamelCase(str) {
  return str
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase()) // Uppercase after separator
    .replace(/^[^a-zA-Z]+/, ''); // Remove leading non-letter characters
}

// Helper to generate SCSS variables
function generateScssVariables(tokens, prefix) {
  return Object.entries(tokens)
    .map(([key, value]) => `$${prefix}-${key}: ${value};`)
    .join('\n');
}

// Helper to generate TypeScript types
function generateTsTypes(tokens, typeName) {
  const values = Object.values(tokens)
    .map(value => typeof value === 'number' ? value : `'${value}'`)
    .join(' | ');
  return `export type ${typeName} = ${values};`;
}



// Helper to generate TypeScript exports with prefixes
function generateTsExports(tokens, prefix) {
  return Object.entries(tokens).map(([key, value]) => {
    const varName = getPrefixedVariableName(prefix, key);
    return typeof value === 'number'
      ? `export const ${varName} = ${value};`
      : `export const ${varName} = '${value}';`;
  }).join('\n');
}

// Token files configuration
const tokenFiles = [
  {
    path: 'src/app/styles/tokens/_colors.tokens.json',
    prefix: 'color',
    typeName: 'ColorToken'
  },
  {
    path: 'src/app/styles/tokens/_spacing.tokens.json',
    prefix: 'spacing',
    typeName: 'SpacingToken'
  },
  {
    path: 'src/app/styles/tokens/_typography.tokens.json',
    prefix: 'typography',
    typeName: 'TypographyToken'
  },
  {
    path: 'src/app/styles/tokens/_media.tokens.json',
    prefix: 'media',
    typeName: 'MediaToken'
  }
];

// Ensure dist folders exist
const scssDistDir = 'src/app/styles/dist';
const tsDistDir = 'src/app/styles/dist/ts';
[scssDistDir, tsDistDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Generate SCSS variables
let scssOutput = '// Auto-generated SCSS variables\n\n';
tokenFiles.forEach(({ path: filePath, prefix }) => {
  if (!fs.existsSync(filePath)) return;
  const tokens = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  scssOutput += `// ${prefix.charAt(0).toUpperCase() + prefix.slice(1)}\n`;
  scssOutput += generateScssVariables(tokens, prefix) + '\n\n';
});

fs.writeFileSync(path.join(scssDistDir, '_variables.scss'), scssOutput);
console.log('✅ SCSS variables generated in dist/_variables.scss');

// Generate TypeScript exports
let tsOutput = '// Auto-generated TypeScript variables\n\n';
tokenFiles.forEach(({ path: filePath, prefix, typeName }) => {
  if (!fs.existsSync(filePath)) return;
  const tokens = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  tsOutput += `// ${prefix.charAt(0).toUpperCase() + prefix.slice(1)}\n`;
  tsOutput += generateTsExports(tokens, prefix) + '\n\n'; // ✅ Fixed line!
  tsOutput += generateTsTypes(tokens, typeName) + '\n\n';
});

fs.writeFileSync(path.join(tsDistDir, 'variables.ts'), tsOutput);
console.log('✅ TypeScript variables generated in dist/ts/variables.ts');

// Generate media.scss for media queries
const mediaTokensPath = path.resolve(__dirname, '../styles/tokens/_media.tokens.json');
const mediaScssPath = path.resolve(__dirname, '../styles/abstracts/_media.scss');

if (fs.existsSync(mediaTokensPath)) {
  const mediaTokens = JSON.parse(fs.readFileSync(mediaTokensPath, 'utf8'));
  const mediaScssContent = '// Auto-generated media query variables\n\n' +
    generateScssVariables(mediaTokens, 'media');

  fs.writeFileSync(mediaScssPath, mediaScssContent);
  console.log('✅ Media queries generated in abstracts/_media.scss');
}
