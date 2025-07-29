const fs = require("fs");
const path = require("path");

const INPUT_DIR = path.resolve(__dirname, "../../icons");
const OUTPUT_DIR = path.resolve(__dirname, "../components/Icons/components");

const pascalCase = str =>
    str
        .replace(/\.svg$/, "")
        .replace(/^icon[-_]?/, "")
        .replace(/[^a-zA-Z0-9]/g, " ")
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join("");

function processSvg(svgContent) {
    // Remove XML declaration and comments
    let processed = svgContent
        .replace(/<\?xml[^>]*\?>/g, '')
        .replace(/<!--[\s\S]*?-->/g, '')
        .trim();

    // Add {...props} to svg tag
    processed = processed.replace(
        /<svg([^>]*?)>/g,
        (match, attrs) => `<svg${attrs} {...props}>`
    );

    // Convert style="..." to style={{ ... }} for React
    processed = processed.replace(/style="([^"]*?)"/g, (_, styleContent) => {
        const styles = styleContent
            .split(';')
            .filter(Boolean)
            .map(s => {
                const [prop, value] = s.split(':').map(p => p.trim());
                const camelProp = prop.replace(/-([a-z])/g, (_, char) => char.toUpperCase());
                return `'${camelProp}': '${value}'`;
            })
            .join(', ');
        return `style={{${styles}}}`;
    });

    return processed;
}
        

function generateComponent(componentName, svgContent) {
    const processedSvg = processSvg(svgContent);

    return `import React from "react";

import type { SVGProps } from "react";

const ${componentName} = (props: SVGProps<SVGSVGElement>) => (
  ${processedSvg}
);

export default ${componentName};
`;
}

async function generateComponents() {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    const files = fs.readdirSync(INPUT_DIR).filter(f => f.endsWith(".svg"));
    const exports = [];

    for (const file of files) {
        try {
            const svgContent = fs.readFileSync(path.join(INPUT_DIR, file), "utf8");
            const componentName = "Icon" + pascalCase(file.replace(".svg", ""));
            const outputPath = path.join(OUTPUT_DIR, `${componentName}.tsx`);

            const componentCode = generateComponent(componentName, svgContent);

            fs.writeFileSync(outputPath, componentCode);
            exports.push(`export { default as ${componentName} } from "./${componentName}";`);

            console.log(`✅ Generated ${componentName}.tsx`);
        } catch (error) {
            console.error(`❌ Error processing ${file}:`, error.message);
        }
    }

    fs.writeFileSync(
        path.join(OUTPUT_DIR, "index.ts"),
        exports.join("\n") + "\n"
    );

    console.log(`✅ Generated ${exports.length} icon components and index.ts`);
}

generateComponents().catch(console.error);
