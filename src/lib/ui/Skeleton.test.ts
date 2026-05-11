import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import Skeleton from './Skeleton.svelte';

describe('Skeleton', () => {
  it('renders a div', () => {
    const { container } = render(Skeleton);
    expect(container.querySelector('div')).toBeInTheDocument();
  });

  it('defaults variant to "text"', () => {
    const { container } = render(Skeleton);
    expect(container.querySelector('div')).toHaveAttribute('data-variant', 'text');
  });

  it('reflects width and height props as inline styles', () => {
    const { container } = render(Skeleton, { props: { width: '120px', height: '24px' } });
    const el = container.querySelector('div') as HTMLElement;
    expect(el.style.width).toBe('120px');
    expect(el.style.height).toBe('24px');
  });

  it('applies chart variant default height of 240px', () => {
    const { container } = render(Skeleton, { props: { variant: 'chart' } });
    const el = container.querySelector('div') as HTMLElement;
    expect(el.style.height).toBe('240px');
  });

  it('applies tableRow variant default height of 40px', () => {
    const { container } = render(Skeleton, { props: { variant: 'tableRow' } });
    const el = container.querySelector('div') as HTMLElement;
    expect(el.style.height).toBe('40px');
  });

  it('applies card variant default height of 120px', () => {
    const { container } = render(Skeleton, { props: { variant: 'card' } });
    const el = container.querySelector('div') as HTMLElement;
    expect(el.style.height).toBe('120px');
  });

  it('explicit width/height override variant defaults', () => {
    const { container } = render(Skeleton, { props: { variant: 'chart', height: '500px' } });
    const el = container.querySelector('div') as HTMLElement;
    expect(el.style.height).toBe('500px');
  });

  it('defaults emphasis to "primary" (full bg-muted)', () => {
    const { container } = render(Skeleton);
    const el = container.querySelector('div')!;
    expect(el.getAttribute('data-emphasis')).toBe('primary');
    expect(el.className).toContain('bg-muted');
    expect(el.className).not.toContain('bg-muted/');
  });

  it('reflects emphasis="secondary" with reduced opacity', () => {
    const { container } = render(Skeleton, { props: { emphasis: 'secondary' } });
    const el = container.querySelector('div')!;
    expect(el.getAttribute('data-emphasis')).toBe('secondary');
    expect(el.className).toContain('bg-muted/60');
  });

  it('reflects emphasis="tertiary" with low opacity', () => {
    const { container } = render(Skeleton, { props: { emphasis: 'tertiary' } });
    const el = container.querySelector('div')!;
    expect(el.getAttribute('data-emphasis')).toBe('tertiary');
    expect(el.className).toContain('bg-muted/30');
  });
});
