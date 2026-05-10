import type { Meta, StoryObj } from '@storybook/svelte';
import { StatusDot } from '../lib';

const meta = {
  title: 'Primitives/StatusDot',
  component: StatusDot,
  tags: ['autodocs'],
  argTypes: {
    status: { control: 'select', options: ['up', 'down', 'warn', 'unknown'] },
    pulse: { control: 'boolean' },
  },
  args: { status: 'up', pulse: false },
} satisfies Meta<StatusDot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Up: Story = { args: { status: 'up' } };
export const Down: Story = { args: { status: 'down' } };
export const Warn: Story = { args: { status: 'warn' } };
export const Unknown: Story = { args: { status: 'unknown' } };
export const Pulsing: Story = { args: { status: 'up', pulse: true } };
