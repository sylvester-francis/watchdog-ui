import type { Meta, StoryObj } from '@storybook/svelte';
import SheetStory from './Sheet.story.svelte';

const meta = {
  title: 'Primitives/Sheet',
  component: SheetStory,
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean' },
    side: { control: 'select', options: ['right', 'left', 'bottom'] },
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl', '2xl'] },
  },
  args: { open: true, side: 'right', size: 'md' },
} satisfies Meta<SheetStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Right: Story = {
  args: { open: true, side: 'right', size: 'md' },
};

export const Left: Story = {
  args: { open: true, side: 'left', size: 'md' },
};

export const Bottom: Story = {
  args: { open: true, side: 'bottom', size: 'md' },
};

export const LargeRight: Story = {
  args: { open: true, side: 'right', size: '2xl' },
};
