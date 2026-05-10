import type { Meta, StoryObj } from '@storybook/svelte';
import CardStory from './Card.story.svelte';

const meta = {
  title: 'Primitives/Card',
  component: CardStory,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['default', 'elevated', 'accent'] },
    body: { control: 'text' },
  },
  args: {
    variant: 'default',
    body: 'Service health overview for the production cluster.',
  },
} satisfies Meta<CardStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Elevated: Story = {
  args: { variant: 'elevated' },
};

export const Accent: Story = {
  args: { variant: 'accent' },
};
