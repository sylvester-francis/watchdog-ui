import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import PageHero from './PageHero.svelte';

describe('PageHero', () => {
  it('renders the title in an h1 by default', () => {
    const { container } = render(PageHero, { props: { title: 'Monitors' } });
    const h1 = container.querySelector('h1');
    expect(h1).toBeInTheDocument();
    expect(h1!.textContent).toBe('Monitors');
  });

  it('honors level=2 (h2)', () => {
    const { container } = render(PageHero, { props: { title: 'Section', level: 2 } });
    expect(container.querySelector('h2')).toBeInTheDocument();
    expect(container.querySelector('h1')).not.toBeInTheDocument();
  });

  it('applies the responsive hero type scale', () => {
    const { container } = render(PageHero, { props: { title: 'Monitors' } });
    const cls = container.querySelector('h1')!.className;
    expect(cls).toContain('text-xl');
    expect(cls).toContain('sm:text-2xl');
    expect(cls).toContain('md:text-3xl');
  });

  it('renders meta as uppercase tracking-wider when provided', () => {
    const { container } = render(PageHero, { props: { title: 'Traces', meta: 'Telemetry · Traces' } });
    const metaEl = container.querySelector('span.uppercase');
    expect(metaEl).toBeInTheDocument();
    expect(metaEl!.textContent).toBe('Telemetry · Traces');
  });

  it('does not render the meta wrapper when neither meta nor metaPip is passed', () => {
    const { container } = render(PageHero, { props: { title: 'Bare' } });
    expect(container.querySelector('span.uppercase')).not.toBeInTheDocument();
    expect(container.querySelector('[data-tone]')).not.toBeInTheDocument();
  });

  it('renders a StatusPip when metaPip is set', () => {
    const { container } = render(PageHero, { props: { title: 'Fleet', metaPip: 'success' } });
    const pip = container.querySelector('[data-tone="success"]');
    expect(pip).toBeInTheDocument();
  });

  it('renders both pip and meta side-by-side when both are set', () => {
    const { container } = render(PageHero, {
      props: { title: 'Fleet', metaPip: 'destructive', meta: 'Fleet · 2 down' }
    });
    expect(container.querySelector('[data-tone="destructive"]')).toBeInTheDocument();
    expect(container.querySelector('span.uppercase')!.textContent).toBe('Fleet · 2 down');
  });

  it('drops the mt-1.5 spacing on the title when there is no meta row above it', () => {
    const { container } = render(PageHero, { props: { title: 'Bare' } });
    expect(container.querySelector('h1')!.className).not.toContain('mt-1.5');
  });

  it('adds mt-1.5 between meta and title when meta is present', () => {
    const { container } = render(PageHero, { props: { title: 'Traces', meta: 'Telemetry' } });
    expect(container.querySelector('h1')!.className).toContain('mt-1.5');
  });

  it('renders an optional description paragraph', () => {
    const { getByText } = render(PageHero, {
      props: { title: 'Traces', description: 'Distributed traces ingested via OTLP.' }
    });
    expect(getByText('Distributed traces ingested via OTLP.')).toBeInTheDocument();
  });

  it('truncates the title (so a long monitor name does not break layout)', () => {
    const { container } = render(PageHero, { props: { title: 'A very long page title' } });
    expect(container.querySelector('h1')!.className).toContain('truncate');
  });

  it('stacks vertically on mobile and switches to row on sm+ via the header class', () => {
    const { container } = render(PageHero, { props: { title: 'Bare' } });
    const header = container.querySelector('header')!;
    expect(header.className).toContain('flex-col');
    expect(header.className).toContain('sm:flex-row');
  });
});
