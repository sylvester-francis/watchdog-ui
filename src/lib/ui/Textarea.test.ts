import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import Textarea from './Textarea.svelte';

describe('Textarea', () => {
  it('renders a textarea element', () => {
    const { container } = render(Textarea);
    expect(container.querySelector('textarea')).toBeInTheDocument();
  });

  it('defaults to rows=3', () => {
    const { container } = render(Textarea);
    expect(container.querySelector('textarea')).toHaveAttribute('rows', '3');
  });

  it('respects rows prop', () => {
    const { container } = render(Textarea, { props: { rows: 5 } });
    expect(container.querySelector('textarea')).toHaveAttribute('rows', '5');
  });

  it('applies error styling when error prop is true', () => {
    const { container } = render(Textarea, { props: { error: true } });
    expect(container.querySelector('textarea')!.className).toContain('border-destructive');
  });

  it('reflects error prop onto aria-invalid', () => {
    const { container } = render(Textarea, { props: { error: true } });
    expect(container.querySelector('textarea')!.getAttribute('aria-invalid')).toBe('true');
  });

  it('exposes focus ring class', () => {
    const { container } = render(Textarea);
    expect(container.querySelector('textarea')!.className).toContain('focus:ring-2');
  });

  it('applies disabled styling', () => {
    const { container } = render(Textarea, { props: { disabled: true } });
    expect(container.querySelector('textarea')).toBeDisabled();
  });

  it('forwards aria-label via rest props', () => {
    const { container } = render(Textarea, { props: { 'aria-label': 'Description' } as Record<string, unknown> });
    expect(container.querySelector('textarea')!.getAttribute('aria-label')).toBe('Description');
  });

  it('forwards required attribute via rest props', () => {
    const { container } = render(Textarea, { props: { required: true } as Record<string, unknown> });
    expect(container.querySelector('textarea')!.hasAttribute('required')).toBe(true);
  });

  it('forwards maxlength via rest props', () => {
    const { container } = render(Textarea, { props: { maxlength: 1000 } as Record<string, unknown> });
    expect(container.querySelector('textarea')!.getAttribute('maxlength')).toBe('1000');
  });

  it('forwards minlength via rest props', () => {
    const { container } = render(Textarea, { props: { minlength: 10 } as Record<string, unknown> });
    expect(container.querySelector('textarea')!.getAttribute('minlength')).toBe('10');
  });

  it('forwards autocomplete + name + id via rest props', () => {
    const { container } = render(Textarea, { props: { autocomplete: 'off', name: 'use_case', id: 'use_case' } as Record<string, unknown> });
    const ta = container.querySelector('textarea')!;
    expect(ta.getAttribute('autocomplete')).toBe('off');
    expect(ta.getAttribute('name')).toBe('use_case');
    expect(ta.id).toBe('use_case');
  });

  it('controlled rows prop wins over rest rows', () => {
    const { container } = render(Textarea, { props: { rows: 5 } });
    expect(container.querySelector('textarea')!.getAttribute('rows')).toBe('5');
  });
});
