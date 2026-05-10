import type { Preview } from '@storybook/svelte';
import { withThemeByClassName } from '@storybook/addon-themes';
import '../src/lib/styles/theme-watchdog.css';
import './storybook.css';

const preview: Preview = {
  parameters: {
    layout: 'centered',
    backgrounds: { disable: true },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeByClassName({
      themes: { dark: 'dark' },
      defaultTheme: 'dark',
    }),
  ],
};

export default preview;
