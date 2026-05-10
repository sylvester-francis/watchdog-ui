import type { Meta, StoryObj } from '@storybook/svelte';
import { Button } from '../lib';

const meta = {
  title: 'Primitives/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'ghost', 'destructive', 'outline'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    tone: { control: 'select', options: [undefined, 'accent', 'up', 'warn', 'down'] },
    disabled: { control: 'boolean' },
  },
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
} satisfies Meta<Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { variant: 'primary' },
};

export const Secondary: Story = {
  args: { variant: 'secondary' },
};

export const Ghost: Story = {
  args: { variant: 'ghost' },
};

export const Destructive: Story = {
  args: { variant: 'destructive' },
};

export const Outline: Story = {
  args: { variant: 'outline' },
};

export const Disabled: Story = {
  args: { variant: 'primary', disabled: true },
};

export const ToneAccent: Story = {
  args: { tone: 'accent' },
};

export const ToneUp: Story = {
  args: { tone: 'up' },
};

export const ToneWarn: Story = {
  args: { tone: 'warn' },
};

export const ToneDown: Story = {
  args: { tone: 'down' },
};

export const SizeSmall: Story = {
  args: { size: 'sm' },
};

export const SizeLarge: Story = {
  args: { size: 'lg' },
};
