import type { Meta, StoryObj } from '@storybook/svelte';
import { StatBlock } from '../lib';

const meta = {
  title: 'Primitives/StatBlock',
  component: StatBlock,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
    delta: { control: 'text' },
    deltaDirection: { control: 'select', options: ['up', 'down', 'neutral'] },
    accent: { control: 'select', options: [undefined, 'up', 'down', 'warn', 'neutral'] },
  },
  args: { label: 'Service Health', value: '99.5%', delta: '+0.2%', deltaDirection: 'up' },
} satisfies Meta<StatBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithAccentUp: Story = {
  args: { label: 'Healthy', value: 12, accent: 'up' },
};

export const WithAccentDown: Story = {
  args: { label: 'Down', value: 2, accent: 'down', deltaDirection: 'down', delta: '+1' },
};

export const WithAccentWarn: Story = {
  args: { label: 'Warnings', value: 3, accent: 'warn' },
};

export const NumericOnly: Story = {
  args: { label: 'Latency p50', value: '14ms', delta: undefined },
};
