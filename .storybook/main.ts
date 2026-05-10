import type { StorybookConfig } from '@storybook/svelte-vite';
import { mergeConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|ts|svelte)'],
  addons: ['@storybook/addon-themes'],
  framework: {
    name: '@storybook/svelte-vite',
    options: {},
  },
  docs: {},
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [svelte({ hot: false })],
    });
  },
};

export default config;
