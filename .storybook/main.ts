import path from "path";
import type { StorybookConfig } from "@storybook/nextjs-vite";

const config: StorybookConfig = {
  stories: ["../src/app/components/**/story.@(js|jsx|ts|tsx)"],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
  ],
  framework: {
    name: "@storybook/nextjs-vite",
    options: {},
  },
  staticDirs: ["../public"],
  viteFinal: async (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@": path.resolve(__dirname, "../src/app"),
    };

    config.css = {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "dist/variables" as *;
            @use "base/typography" as *;
          `,
          loadPaths: [path.resolve(__dirname, "../src/app/styles")]
        }
      }
    };

    if (config.resolve?.alias) {
      // Ensure proper resolution of SCSS modules
      config.resolve.alias['/src/'] = path.resolve(__dirname, '../src/');
    }

    return config;
  },
};

export default config;
