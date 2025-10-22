import type { Preview } from '@storybook/nextjs-vite'
import '../src/app/(routes)/global.scss';

// Add Google Fonts for Storybook (Tektur)
if (typeof document !== 'undefined') {
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css2?family=Tektur:wght@400;700&display=swap';
  link.rel = 'stylesheet';
  document.head.appendChild(link);

  // Set the CSS variable so your SCSS uses the font
  document.documentElement.style.setProperty('--font-tektur', "'Tektur', cursive");
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;