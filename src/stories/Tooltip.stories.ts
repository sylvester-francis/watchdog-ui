import type { Meta, StoryObj } from '@storybook/svelte';
import TooltipStory from './Tooltip.story.svelte';

const meta = {
  title: 'Primitives/Tooltip',
  component: TooltipStory,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    content: { control: 'text' },
  },
  args: {
    label: 'Latency p50 over the last 24 hours',
    content: 'p50: 14ms',
  },
} satisfies Meta<TooltipStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
