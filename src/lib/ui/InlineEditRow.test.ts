import { render, fireEvent } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import { createRawSnippet } from 'svelte';
import InlineEditRow from './InlineEditRow.svelte';

function snippet(text: string) {
  return createRawSnippet(() => ({ render: () => `<span>${text}</span>` }));
}

describe('InlineEditRow', () => {
  it('renders the label in display mode', () => {
    const { getByText } = render(InlineEditRow, { props: { label: 'Username' } });
    expect(getByText('Username')).toBeInTheDocument();
  });

  it('sets data-editing=false in display mode', () => {
    const { container } = render(InlineEditRow, { props: { label: 'Username' } });
    expect(container.querySelector('[data-inline-edit-row]')!.getAttribute('data-editing')).toBe('false');
  });

  it('sets data-editing=true when editing prop is true', () => {
    const { container } = render(InlineEditRow, { props: { label: 'Username', editing: true } });
    expect(container.querySelector('[data-inline-edit-row]')!.getAttribute('data-editing')).toBe('true');
  });

  it('renders the display snippet when not editing', () => {
    const { getByText } = render(InlineEditRow, {
      props: { label: 'Username', display: snippet('my-username') }
    });
    expect(getByText('my-username')).toBeInTheDocument();
  });

  it('does not render the edit snippet when not editing', () => {
    const { queryByText } = render(InlineEditRow, {
      props: { label: 'Username', editing: false, edit: snippet('form-content') }
    });
    expect(queryByText('form-content')).not.toBeInTheDocument();
  });

  it('renders the edit snippet when editing', () => {
    const { getByText } = render(InlineEditRow, {
      props: { label: 'Username', editing: true, edit: snippet('form-content') }
    });
    expect(getByText('form-content')).toBeInTheDocument();
  });

  it('does not render the display snippet when editing', () => {
    const { queryByText } = render(InlineEditRow, {
      props: { label: 'Username', editing: true, display: snippet('my-username'), edit: snippet('form') }
    });
    expect(queryByText('my-username')).not.toBeInTheDocument();
  });

  it('shows the Edit button when onEdit is provided and not editing', () => {
    const { getByRole } = render(InlineEditRow, {
      props: { label: 'Username', onEdit: () => {} }
    });
    expect(getByRole('button', { name: 'Edit' })).toBeInTheDocument();
  });

  it('omits the Edit button when onEdit is not provided', () => {
    const { queryByRole } = render(InlineEditRow, { props: { label: 'Username' } });
    expect(queryByRole('button', { name: 'Edit' })).not.toBeInTheDocument();
  });

  it('calls onEdit when the Edit button is clicked', async () => {
    let called = false;
    const { getByRole } = render(InlineEditRow, {
      props: { label: 'Username', onEdit: () => { called = true; } }
    });
    await fireEvent.click(getByRole('button', { name: 'Edit' }));
    expect(called).toBe(true);
  });

  it('renders the success message below the display row when provided', () => {
    const { getByText } = render(InlineEditRow, {
      props: { label: 'Username', success: 'Updated' }
    });
    expect(getByText(/Updated/)).toBeInTheDocument();
  });

  it('does not render success message when editing', () => {
    const { queryByText } = render(InlineEditRow, {
      props: { label: 'Username', editing: true, success: 'Updated' }
    });
    expect(queryByText(/Updated/)).not.toBeInTheDocument();
  });
});
