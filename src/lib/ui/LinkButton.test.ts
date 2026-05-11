import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import LinkButton from './LinkButton.svelte';

describe('LinkButton', () => {
  it('renders an anchor element', () => {
    const { container } = render(LinkButton, { props: { href: '/foo' } });
    expect(container.querySelector('a')).toBeInTheDocument();
  });

  it('forwards href to the anchor', () => {
    const { container } = render(LinkButton, { props: { href: '/dashboard' } });
    expect(container.querySelector('a')!.getAttribute('href')).toBe('/dashboard');
  });

  it('reflects variant onto data-variant', () => {
    const { container } = render(LinkButton, { props: { href: '/x', variant: 'outline' } });
    expect(container.querySelector('a')!.getAttribute('data-variant')).toBe('outline');
  });

  it('reflects size onto data-size', () => {
    const { container } = render(LinkButton, { props: { href: '/x', size: 'xs' } });
    expect(container.querySelector('a')!.getAttribute('data-size')).toBe('xs');
  });

  it('applies primary variant classes by default', () => {
    const { container } = render(LinkButton, { props: { href: '/x' } });
    expect(container.querySelector('a')!.className).toContain('bg-accent');
  });

  it('applies size xs padding', () => {
    const { container } = render(LinkButton, { props: { href: '/x', size: 'xs' } });
    expect(container.querySelector('a')!.className).toContain('px-1.5');
  });

  it('applies size lg padding', () => {
    const { container } = render(LinkButton, { props: { href: '/x', size: 'lg' } });
    expect(container.querySelector('a')!.className).toContain('px-6');
  });

  it('forwards target via rest props', () => {
    const { container } = render(LinkButton, { props: { href: '/x', target: '_blank' } as Record<string, unknown> });
    expect(container.querySelector('a')!.getAttribute('target')).toBe('_blank');
  });

  it('forwards rel via rest props', () => {
    const { container } = render(LinkButton, { props: { href: '/x', rel: 'noopener noreferrer' } as Record<string, unknown> });
    expect(container.querySelector('a')!.getAttribute('rel')).toBe('noopener noreferrer');
  });

  it('forwards aria-label via rest props', () => {
    const { container } = render(LinkButton, { props: { href: '/x', 'aria-label': 'Go home' } as Record<string, unknown> });
    expect(container.querySelector('a')!.getAttribute('aria-label')).toBe('Go home');
  });

  it('reflects tone classes (down)', () => {
    const { container } = render(LinkButton, { props: { href: '/x', tone: 'down' } });
    expect(container.querySelector('a')!.className).toContain('bg-destructive/10');
  });
});
