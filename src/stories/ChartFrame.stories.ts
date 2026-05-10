import type { Meta, StoryObj } from '@storybook/svelte';
import ChartFrameStory from './ChartFrame.story.svelte';

const meta = {
  title: 'Primitives/ChartFrame',
  component: ChartFrameStory,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    height: { control: 'text' },
    loading: { control: 'boolean' },
  },
  args: {
    title: 'Latency p50',
    subtitle: 'Last 24 hours',
    height: '120px',
    loading: false,
  },
} satisfies Meta<ChartFrameStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Loading: Story = {
  args: { loading: true },
};

export const NoHeader: Story = {
  args: { title: undefined, subtitle: undefined },
};
