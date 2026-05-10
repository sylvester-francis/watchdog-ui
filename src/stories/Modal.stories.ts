import type { Meta, StoryObj } from '@storybook/svelte';
import ModalStory from './Modal.story.svelte';

const meta = {
  title: 'Primitives/Modal',
  component: ModalStory,
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean' },
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl'] },
  },
  args: { open: true, size: 'md' },
} satisfies Meta<ModalStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { open: true, size: 'md' },
};

export const Small: Story = {
  args: { open: true, size: 'sm' },
};

export const Large: Story = {
  args: { open: true, size: 'lg' },
};
