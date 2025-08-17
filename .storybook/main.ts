import path from "path";
import type { StorybookConfig } from "@storybook/nextjs-vite";

const config: StorybookConfig = {
  stories: [
    '../src/app/components/**/story.@(js|jsx|ts|tsx)'  // ✅ exact filename match
  ],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-vitest'
  ],
  framework: {
    name: '@storybook/nextjs-vite',
    options: {}
  },
  staticDirs: [
    '../public'
  ],
  viteFinal: async (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@styles': path.resolve(__dirname, '../src/app/styles'),  // ✅ Create alias
    };

    config.css = config.css || {};
    config.css.preprocessorOptions = config.css.preprocessorOptions || {};
    config.css.preprocessorOptions.scss = config.css.preprocessorOptions.scss || {};

    config.css.preprocessorOptions.scss.additionalData = `
      @use "@styles/dist/variables" as *;
      @use "@styles/abstracts/media-mixins" as media;
      @use "@styles/base/typography" as *;
    `;

    return config;
  }
};

export default config;
