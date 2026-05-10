import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import Select from './Select.svelte';

describe('Select', () => {
  it('renders a select element', () => {
    const { container } = render(Select);
    expect(container.querySelector('select')).toBeInTheDocument();
  });

  it('reflects disabled prop', () => {
    const { container } = render(Select, { props: { disabled: true } });
    expect(container.querySelector('select')).toBeDisabled();
  });

  it('applies error styling', () => {
    const { container } = render(Select, { props: { error: true } });
    expect(container.querySelector('select')!.className).toContain('border-destructive');
  });

  it('reflects error onto aria-invalid', () => {
    const { container } = render(Select, { props: { error: true } });
    expect(container.querySelector('select')!.getAttribute('aria-invalid')).toBe('true');
  });

  it('exposes focus ring class', () => {
    const { container } = render(Select);
    expect(container.querySelector('select')!.className).toContain('focus:ring-2');
  });

  it('applies size sm padding + text-xs', () => {
    const { container } = render(Select, { props: { size: 'sm' } });
    const sel = container.querySelector('select')!;
    expect(sel.className).toContain('text-xs');
    expect(sel.className).toContain('px-2.5');
  });

  it('reflects size sm onto data-size attribute', () => {
    const { container } = render(Select, { props: { size: 'sm' } });
    expect(container.querySelector('select')!.getAttribute('data-size')).toBe('sm');
  });

  it('reflects default size md onto data-size attribute', () => {
    const { container } = render(Select);
    expect(container.querySelector('select')!.getAttribute('data-size')).toBe('md');
  });

  it('forwards aria-label via rest props', () => {
    const { container } = render(Select, { props: { 'aria-label': 'Team size' } as Record<string, unknown> });
    expect(container.querySelector('select')!.getAttribute('aria-label')).toBe('Team size');
  });

  it('forwards required + name via rest props', () => {
    const { container } = render(Select, { props: { required: true, name: 'team_size' } as Record<string, unknown> });
    const sel = container.querySelector('select')!;
    expect(sel.hasAttribute('required')).toBe(true);
    expect(sel.getAttribute('name')).toBe('team_size');
  });
});
