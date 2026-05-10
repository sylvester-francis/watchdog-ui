import type { Meta, StoryObj } from '@storybook/svelte';
import { Textarea } from '../lib';

const meta = {
  title: 'Primitives/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    rows: { control: 'number' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
  },
  args: {
    rows: 3,
    disabled: false,
    error: false,
  },
} satisfies Meta<Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { value: 'Database connection refused after retry exhaustion.' },
};

export const WithPlaceholder: Story = {
  args: { placeholder: 'Describe the incident...' },
};

export const Disabled: Story = {
  args: { value: 'Read-only notes for this service.', disabled: true },
};

export const Error: Story = {
  args: { value: '', error: true, placeholder: 'A description is required' },
};
