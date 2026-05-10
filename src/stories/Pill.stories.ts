import type { Meta, StoryObj } from '@storybook/svelte';
import { Pill } from '../lib';

const meta = {
  title: 'Primitives/Pill',
  component: Pill,
  tags: ['autodocs'],
  argTypes: {
    tone: { control: 'select', options: ['neutral', 'accent', 'up', 'down', 'warn'] },
  },
  args: { tone: 'neutral' },
} satisfies Meta<Pill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Neutral: Story = { args: { tone: 'neutral' } };
export const Accent: Story = { args: { tone: 'accent' } };
export const Up: Story = { args: { tone: 'up' } };
export const Down: Story = { args: { tone: 'down' } };
export const Warn: Story = { args: { tone: 'warn' } };
