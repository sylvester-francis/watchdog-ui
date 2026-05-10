import type { Meta, StoryObj } from '@storybook/svelte';
import StatusBadgeStory from './StatusBadge.story.svelte';

const meta = {
  title: 'Primitives/StatusBadge',
  component: StatusBadgeStory,
  tags: ['autodocs'],
  argTypes: {
    status: { control: 'select', options: ['up', 'down', 'warn', 'expired', 'maintenance', 'unknown'] },
    label: { control: 'text' },
  },
  args: { status: 'up', label: 'Production server' },
} satisfies Meta<StatusBadgeStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Up: Story = { args: { status: 'up', label: 'Up' } };
export const Down: Story = { args: { status: 'down', label: 'Down' } };
export const Warn: Story = { args: { status: 'warn', label: 'Degraded' } };
export const Expired: Story = { args: { status: 'expired', label: 'Expired' } };
export const Maintenance: Story = { args: { status: 'maintenance', label: 'Maintenance' } };
export const Unknown: Story = { args: { status: 'unknown', label: 'Unknown' } };
