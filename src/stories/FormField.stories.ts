import type { Meta, StoryObj } from '@storybook/svelte';
import FormFieldStory from './FormField.story.svelte';

const meta = {
  title: 'Primitives/FormField',
  component: FormFieldStory,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    error: { control: 'text' },
    required: { control: 'boolean' },
    htmlFor: { control: 'text' },
    placeholder: { control: 'text' },
    showInput: { control: 'boolean' },
  },
  args: {
    label: 'Name',
    required: false,
    showInput: true,
    htmlFor: 'name',
    placeholder: 'Production server',
  },
} satisfies Meta<FormFieldStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithLabel: Story = {
  args: { label: 'Name', htmlFor: 'name' },
};

export const Required: Story = {
  args: { label: 'API endpoint', htmlFor: 'endpoint', required: true, placeholder: 'https://api.example.com' },
};

export const WithError: Story = {
  args: { label: 'Name', htmlFor: 'name', error: 'This field is required' },
};

export const WithoutLabel: Story = {
  args: { label: undefined, htmlFor: undefined },
};
