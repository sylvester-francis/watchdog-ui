import type { Meta, StoryObj } from '@storybook/svelte';
import { Tabs } from '../lib';

const meta = {
  title: 'Primitives/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text' },
  },
  args: {
    value: 'overview',
    options: [
      { value: 'overview', label: 'Overview' },
      { value: 'incidents', label: 'Incidents' },
      { value: 'metrics', label: 'Metrics' },
      { value: 'logs', label: 'Logs' },
    ],
  },
} satisfies Meta<Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const IncidentsActive: Story = {
  args: { value: 'incidents' },
};
