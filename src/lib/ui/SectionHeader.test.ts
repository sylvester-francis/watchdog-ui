import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import SectionHeader from './SectionHeader.svelte';

describe('SectionHeader', () => {
  it('renders the title in an h3 by default', () => {
    const { container } = render(SectionHeader, { props: { title: 'Services' } });
    const h3 = container.querySelector('h3');
    expect(h3).toBeInTheDocument();
    expect(h3!.textContent).toBe('Services');
  });

  it('honors the level prop', () => {
    const { container } = render(SectionHeader, { props: { title: 'Heading', level: 2 } });
    expect(container.querySelector('h2')).toBeInTheDocument();
    expect(container.querySelector('h3')).not.toBeInTheDocument();
  });

  it('renders the hairline rule under the section', () => {
    const { container } = render(SectionHeader, { props: { title: 'Services' } });
    const wrap = container.firstElementChild!;
    expect(wrap.className).toContain('border-b');
    expect(wrap.className).toContain('border-border');
    expect(wrap.className).toContain('pb-3');
  });

  it('omits the count span when no count is passed', () => {
    const { container } = render(SectionHeader, { props: { title: 'Services' } });
    expect(container.querySelectorAll('span').length).toBe(0);
  });

  it('renders the count alongside the title when provided', () => {
    const { container } = render(SectionHeader, { props: { title: 'Services', count: 5 } });
    const span = container.querySelector('span');
    expect(span).toBeInTheDocument();
    expect(span!.textContent).toBe('5');
    expect(span!.className).toContain('font-mono');
    expect(span!.className).toContain('tabular-nums');
  });

  it('renders count=0 (does not treat zero as missing)', () => {
    const { container } = render(SectionHeader, { props: { title: 'Services', count: 0 } });
    const span = container.querySelector('span');
    expect(span).toBeInTheDocument();
    expect(span!.textContent).toBe('0');
  });

  it('accepts string counts (e.g. percentages)', () => {
    const { container } = render(SectionHeader, { props: { title: 'Uptime', count: '99.9%' } });
    expect(container.querySelector('span')!.textContent).toBe('99.9%');
  });

  it('omits the count span when empty string is passed', () => {
    const { container } = render(SectionHeader, { props: { title: 'Services', count: '' } });
    expect(container.querySelectorAll('span').length).toBe(0);
  });
});
