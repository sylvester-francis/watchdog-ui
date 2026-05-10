import type { Meta, StoryObj } from '@storybook/svelte';
import { Input } from '../lib';

const meta = {
  title: 'Primitives/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['text', 'email', 'password', 'url', 'number', 'search'] },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
    error: { control: 'boolean' },
    min: { control: 'text' },
    max: { control: 'text' },
    step: { control: 'text' },
  },
  args: {
    type: 'text',
    disabled: false,
    readonly: false,
    error: false,
  },
} satisfies Meta<Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { value: 'Production server' },
};

export const Email: Story = {
  args: { type: 'email', placeholder: 'you@example.com' },
};

export const Password: Story = {
  args: { type: 'password', value: 'hunter2hunter2' },
};

export const WithPlaceholder: Story = {
  args: { placeholder: 'Search services...' },
};

export const Disabled: Story = {
  args: { value: 'API endpoint', disabled: true },
};

export const Error: Story = {
  args: { value: 'invalid value', error: true },
};

export const NumberWithRange: Story = {
  args: { type: 'number', value: 30, min: 0, max: 300, step: 5 },
};
