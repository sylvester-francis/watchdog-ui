import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import Input from './Input.svelte';
import IconLeftHarness from './__test_harnesses__/InputIconLeft.svelte';

describe('Input', () => {
  it('renders an input element', () => {
    const { container } = render(Input);
    expect(container.querySelector('input')).toBeInTheDocument();
  });

  it('defaults to type="text"', () => {
    const { container } = render(Input);
    expect(container.querySelector('input')).toHaveAttribute('type', 'text');
  });

  it('respects type prop', () => {
    const { container } = render(Input, { props: { type: 'email' } });
    expect(container.querySelector('input')).toHaveAttribute('type', 'email');
  });

  it('reflects placeholder prop', () => {
    const { container } = render(Input, { props: { placeholder: 'enter email' } });
    expect(container.querySelector('input')).toHaveAttribute('placeholder', 'enter email');
  });

  it('applies error styling when error prop is true', () => {
    const { container } = render(Input, { props: { error: true } });
    expect(container.querySelector('input')!.className).toContain('border-destructive');
  });

  it('does not apply error styling by default', () => {
    const { container } = render(Input);
    expect(container.querySelector('input')!.className).not.toContain('border-destructive');
  });

  it('reflects error prop onto aria-invalid', () => {
    const { container } = render(Input, { props: { error: true } });
    expect(container.querySelector('input')!.getAttribute('aria-invalid')).toBe('true');
  });

  it('applies disabled styling', () => {
    const { container } = render(Input, { props: { disabled: true } });
    const input = container.querySelector('input')!;
    expect(input).toBeDisabled();
    expect(input.className).toContain('disabled:opacity-50');
  });

  it('exposes focus ring class on the input', () => {
    const { container } = render(Input);
    expect(container.querySelector('input')!.className).toContain('focus:ring-2');
  });

  it('forwards min, max, step attributes for number inputs', () => {
    const { container } = render(Input, { props: { type: 'number', min: 5, max: 3600, step: 1 } });
    const input = container.querySelector('input')!;
    expect(input.getAttribute('min')).toBe('5');
    expect(input.getAttribute('max')).toBe('3600');
    expect(input.getAttribute('step')).toBe('1');
  });

  it('omits min, max, step when not provided', () => {
    const { container } = render(Input);
    const input = container.querySelector('input')!;
    expect(input.hasAttribute('min')).toBe(false);
    expect(input.hasAttribute('max')).toBe(false);
    expect(input.hasAttribute('step')).toBe(false);
  });

  it('accepts numeric value', () => {
    const { container } = render(Input, { props: { type: 'number', value: 42 } });
    const input = container.querySelector('input') as HTMLInputElement;
    expect(input.value).toBe('42');
  });

  it('forwards aria-label via rest props', () => {
    const { container } = render(Input, { props: { 'aria-label': 'Search' } as Record<string, unknown> });
    expect(container.querySelector('input')!.getAttribute('aria-label')).toBe('Search');
  });

  it('forwards autocomplete via rest props', () => {
    const { container } = render(Input, { props: { autocomplete: 'email' } as Record<string, unknown> });
    expect(container.querySelector('input')!.getAttribute('autocomplete')).toBe('email');
  });

  it('forwards required attribute via rest props', () => {
    const { container } = render(Input, { props: { required: true } as Record<string, unknown> });
    expect(container.querySelector('input')!.hasAttribute('required')).toBe(true);
  });

  it('forwards minlength + maxlength via rest props', () => {
    const { container } = render(Input, { props: { minlength: 3, maxlength: 50 } as Record<string, unknown> });
    const input = container.querySelector('input')!;
    expect(input.getAttribute('minlength')).toBe('3');
    expect(input.getAttribute('maxlength')).toBe('50');
  });

  it('forwards pattern + inputmode via rest props', () => {
    const { container } = render(Input, { props: { pattern: '[0-9]*', inputmode: 'numeric' } as Record<string, unknown> });
    const input = container.querySelector('input')!;
    expect(input.getAttribute('pattern')).toBe('[0-9]*');
    expect(input.getAttribute('inputmode')).toBe('numeric');
  });

  it('controlled type prop wins over rest type', () => {
    const { container } = render(Input, { props: { type: 'email' } });
    expect(container.querySelector('input')!.getAttribute('type')).toBe('email');
  });

  it('renders iconLeft snippet inside a relative wrapper and pads input', () => {
    const { container } = render(IconLeftHarness);
    const wrapper = container.querySelector('.relative');
    expect(wrapper).not.toBeNull();
    expect(wrapper!.querySelector('[data-testid="icon-left"]')).not.toBeNull();
    expect(container.querySelector('input')!.className).toContain('pl-9');
  });

  it('omits relative wrapper when iconLeft is not provided', () => {
    const { container } = render(Input);
    expect(container.querySelector('.relative')).toBeNull();
    expect(container.querySelector('input')!.className).toContain('px-3');
  });
});
