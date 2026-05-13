import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import StatusPip from './StatusPip.svelte';

describe('StatusPip', () => {
  it('renders as a span', () => {
    const { container } = render(StatusPip);
    expect(container.querySelector('span')).toBeInTheDocument();
  });

  it('defaults to tone="muted"', () => {
    const { container } = render(StatusPip);
    const el = container.querySelector('span')!;
    expect(el.getAttribute('data-tone')).toBe('muted');
    expect(el.className).toContain('bg-muted-foreground/50');
  });

  it('renders 1.5x size for the restrained pip aesthetic', () => {
    const { container } = render(StatusPip);
    const cls = container.querySelector('span')!.className;
    expect(cls).toContain('h-1.5');
    expect(cls).toContain('w-1.5');
    expect(cls).toContain('rounded-full');
  });

  it('always sets shrink-0 so it never collapses inside flex rows', () => {
    const { container } = render(StatusPip);
    expect(container.querySelector('span')!.className).toContain('shrink-0');
  });

  it('applies success bg when tone=success', () => {
    const { container } = render(StatusPip, { props: { tone: 'success' } });
    const el = container.querySelector('span')!;
    expect(el.getAttribute('data-tone')).toBe('success');
    expect(el.className).toContain('bg-success');
  });

  it('applies destructive bg when tone=destructive', () => {
    const { container } = render(StatusPip, { props: { tone: 'destructive' } });
    expect(container.querySelector('span')!.className).toContain('bg-destructive');
  });

  it('applies warning bg when tone=warning', () => {
    const { container } = render(StatusPip, { props: { tone: 'warning' } });
    expect(container.querySelector('span')!.className).toContain('bg-warning');
  });

  it('applies accent bg when tone=accent', () => {
    const { container } = render(StatusPip, { props: { tone: 'accent' } });
    expect(container.querySelector('span')!.className).toContain('bg-accent');
  });

  it('adds animate-pulse when pulse=true', () => {
    const { container } = render(StatusPip, { props: { pulse: true } });
    expect(container.querySelector('span')!.className).toContain('animate-pulse');
  });

  it('omits animate-pulse by default', () => {
    const { container } = render(StatusPip);
    expect(container.querySelector('span')!.className).not.toContain('animate-pulse');
  });

  it('hides the pip from assistive tech by default (decorative)', () => {
    const { container } = render(StatusPip);
    expect(container.querySelector('span')!.getAttribute('aria-hidden')).toBe('true');
  });

  it('exposes an accessible label when one is provided', () => {
    const { container } = render(StatusPip, { props: { label: 'Status: up' } });
    const el = container.querySelector('span')!;
    expect(el.getAttribute('aria-label')).toBe('Status: up');
    expect(el.getAttribute('aria-hidden')).toBeNull();
  });
});
