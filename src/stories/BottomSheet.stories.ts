import type { Meta, StoryObj } from '@storybook/svelte';
import BottomSheetStory from './BottomSheet.story.svelte';

const meta = {
  title: 'Primitives/BottomSheet',
  component: BottomSheetStory,
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean' },
    height: { control: 'select', options: ['half', 'full'] },
  },
  args: { open: true, height: 'half' },
} satisfies Meta<BottomSheetStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Half: Story = {
  args: { open: true, height: 'half' },
};

export const Full: Story = {
  args: { open: true, height: 'full' },
};
