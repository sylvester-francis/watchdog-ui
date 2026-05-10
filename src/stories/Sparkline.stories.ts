import type { Meta, StoryObj } from '@storybook/svelte';
import { Sparkline } from '../lib';

const meta = {
  title: 'Primitives/Sparkline',
  component: Sparkline,
  tags: ['autodocs'],
  argTypes: {
    status: { control: 'select', options: [undefined, 'up', 'down', 'warn', 'unknown'] },
    fill: { control: 'boolean' },
    width: { control: 'number' },
    height: { control: 'number' },
    color: { control: 'color' },
  },
  args: {
    data: [10, 12, 11, 14, 13, 15, 14, 16, 15, 18],
    fill: false,
    width: 100,
    height: 18,
  },
} satisfies Meta<Sparkline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithFill: Story = {
  args: { fill: true },
};

export const Up: Story = {
  args: { status: 'up' },
};

export const Down: Story = {
  args: { status: 'down', data: [22, 20, 21, 18, 17, 14, 12, 11, 9, 6] },
};

export const Warn: Story = {
  args: { status: 'warn', fill: true },
};
