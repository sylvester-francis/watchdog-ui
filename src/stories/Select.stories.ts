import type { Meta, StoryObj } from '@storybook/svelte';
import SelectStory from './Select.story.svelte';

const meta = {
  title: 'Primitives/Select',
  component: SelectStory,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'select', options: ['postgres', 'mysql', 'sqlite', 'redis'] },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
  },
  args: {
    value: 'postgres',
    disabled: false,
    error: false,
  },
} satisfies Meta<SelectStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: { disabled: true },
};
