import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import StatGrid from './StatGrid.svelte';

describe('StatGrid', () => {
  it('renders a section element', () => {
    const { container } = render(StatGrid);
    expect(container.querySelector('section')).toBeInTheDocument();
  });

  it('defaults to columns=4 (collapses to 2 on mobile, 4 from sm+)', () => {
    const { container } = render(StatGrid);
    const cls = container.querySelector('section')!.className;
    expect(cls).toContain('grid-cols-2');
    expect(cls).toContain('sm:grid-cols-4');
    expect(container.querySelector('section')!.getAttribute('data-columns')).toBe('4');
  });

  it('honors columns=3 (stacks to single col on mobile, 3 from sm+)', () => {
    const { container } = render(StatGrid, { props: { columns: 3 } });
    const cls = container.querySelector('section')!.className;
    expect(cls).toContain('grid-cols-1');
    expect(cls).toContain('sm:grid-cols-3');
  });

  it('honors columns=2 (stacks to single col on mobile, 2 from sm+)', () => {
    const { container } = render(StatGrid, { props: { columns: 2 } });
    const cls = container.querySelector('section')!.className;
    expect(cls).toContain('grid-cols-1');
    expect(cls).toContain('sm:grid-cols-2');
  });

  it('uses the hairline-separator trick (gap-px + bg-border parent)', () => {
    const { container } = render(StatGrid);
    const cls = container.querySelector('section')!.className;
    expect(cls).toContain('gap-px');
    expect(cls).toContain('bg-border');
    expect(cls).toContain('overflow-hidden');
    expect(cls).toContain('border-y');
  });
});
