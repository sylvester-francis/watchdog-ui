import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import StatCell from './StatCell.svelte';

describe('StatCell', () => {
  it('renders with the data-stat-cell hook for testing/scoping', () => {
    const { container } = render(StatCell, { props: { label: 'Monitors', value: 5 } });
    expect(container.querySelector('[data-stat-cell]')).toBeInTheDocument();
  });

  it('renders the label uppercase + tracking-wider for the meta-row aesthetic', () => {
    const { container } = render(StatCell, { props: { label: 'Monitors', value: 5 } });
    const labelEl = Array.from(container.querySelectorAll('div')).find((d) =>
      d.textContent === 'Monitors'
    );
    expect(labelEl).toBeDefined();
    expect(labelEl!.className).toContain('uppercase');
    expect(labelEl!.className).toContain('tracking-wider');
    expect(labelEl!.className).toContain('text-muted-foreground');
  });

  it('renders the value in font-mono tabular-nums at text-lg', () => {
    const { container } = render(StatCell, { props: { label: 'Monitors', value: 5 } });
    const valueEl = Array.from(container.querySelectorAll('div')).find((d) =>
      d.textContent === '5'
    );
    expect(valueEl).toBeDefined();
    expect(valueEl!.className).toContain('font-mono');
    expect(valueEl!.className).toContain('tabular-nums');
    expect(valueEl!.className).toContain('text-lg');
  });

  it('renders numeric value', () => {
    const { container } = render(StatCell, { props: { label: 'Monitors', value: 42 } });
    expect(container.textContent).toContain('42');
  });

  it('renders string value (e.g. "99.9%")', () => {
    const { container } = render(StatCell, { props: { label: 'Uptime', value: '99.9%' } });
    expect(container.textContent).toContain('99.9%');
  });

  it('renders value=0 (does not skip falsy)', () => {
    const { container } = render(StatCell, { props: { label: 'Monitors', value: 0 } });
    expect(container.textContent).toContain('0');
  });

  it('value defaults to foreground color (tone=default)', () => {
    const { container } = render(StatCell, { props: { label: 'Monitors', value: 5 } });
    const valueEl = Array.from(container.querySelectorAll('div')).find((d) =>
      d.textContent === '5'
    );
    expect(valueEl!.className).toContain('text-foreground');
  });

  it('applies valueTone="success" -> text-success', () => {
    const { container } = render(StatCell, {
      props: { label: 'Healthy', value: 5, valueTone: 'success' }
    });
    const valueEl = Array.from(container.querySelectorAll('div')).find((d) =>
      d.textContent === '5'
    );
    expect(valueEl!.className).toContain('text-success');
  });

  it('applies valueTone="destructive" -> text-destructive', () => {
    const { container } = render(StatCell, {
      props: { label: 'Down', value: 2, valueTone: 'destructive' }
    });
    const valueEl = Array.from(container.querySelectorAll('div')).find((d) =>
      d.textContent === '2'
    );
    expect(valueEl!.className).toContain('text-destructive');
  });

  it('applies valueTone="warning" -> text-warning', () => {
    const { container } = render(StatCell, {
      props: { label: 'Incidents', value: 1, valueTone: 'warning' }
    });
    const valueEl = Array.from(container.querySelectorAll('div')).find((d) =>
      d.textContent === '1'
    );
    expect(valueEl!.className).toContain('text-warning');
  });

  it('omits the sublabel row when sublabel snippet is not provided', () => {
    const { container } = render(StatCell, { props: { label: 'Monitors', value: 5 } });
    expect(container.querySelectorAll('div').length).toBe(3); // cell + label + value, no sublabel
  });
});
