// eslint.config.mjs
import storybook from "eslint-plugin-storybook";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/** @type {import("eslint").Linter.FlatConfig[]} */
const eslintConfig = [
  // ✅ Ignore build output and external folders
  {
    ignores: [
      "**/node_modules/**",
      "**/.next/**",
      "**/dist/**",
      "**/build/**",
      "**/storybook-static/**",
      "**/public/**",
    ],
  },

  // ✅ Base rules first
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  ...storybook.configs["flat/recommended"],

  // ✅ Override after all configs
  {
    rules: {
      "react/no-unescaped-entities": "off",
      '@typescript-eslint/no-require-imports': 'off'
    },
  },
];

export default eslintConfig;
