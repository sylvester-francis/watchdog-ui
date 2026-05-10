import type { Meta, StoryObj } from '@storybook/svelte';
import EmptyStateStory from './EmptyState.story.svelte';

const meta = {
  title: 'Primitives/EmptyState',
  component: EmptyStateStory,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    showCta: { control: 'boolean' },
  },
  args: {
    title: 'No incidents',
    description: 'Nothing here yet. Things look healthy across all services.',
    showCta: false,
  },
} satisfies Meta<EmptyStateStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithCta: Story = {
  args: { showCta: true },
};

export const TitleOnly: Story = {
  args: { title: 'Nothing here yet', description: undefined },
};
