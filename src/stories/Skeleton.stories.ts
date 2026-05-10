import type { Meta, StoryObj } from '@storybook/svelte';
import { Skeleton } from '../lib';

const meta = {
  title: 'Primitives/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['text', 'chart', 'tableRow', 'card'] },
    width: { control: 'text' },
    height: { control: 'text' },
  },
  args: { variant: 'text' },
} satisfies Meta<Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Text: Story = {
  args: { variant: 'text' },
};

export const Chart: Story = {
  args: { variant: 'chart' },
};

export const TableRow: Story = {
  args: { variant: 'tableRow' },
};

export const Card: Story = {
  args: { variant: 'card' },
};

export const CustomSize: Story = {
  args: { variant: 'text', width: '160px', height: '24px' },
};
