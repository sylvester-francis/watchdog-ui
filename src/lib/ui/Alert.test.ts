import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import Alert from './Alert.svelte';

describe('Alert', () => {
  it('renders with role="alert"', () => {
    const { container } = render(Alert);
    expect(container.querySelector('[role="alert"]')).toBeInTheDocument();
  });

  it('defaults to tone="down" (error/destructive)', () => {
    const { container } = render(Alert);
    expect(container.querySelector('[role="alert"]')!.getAttribute('data-tone')).toBe('down');
  });

  it('reflects tone onto data-tone', () => {
    const { container } = render(Alert, { props: { tone: 'warn' } });
    expect(container.querySelector('[role="alert"]')!.getAttribute('data-tone')).toBe('warn');
  });

  it('applies destructive bg + text when tone=down', () => {
    const { container } = render(Alert, { props: { tone: 'down' } });
    const cls = container.querySelector('[role="alert"]')!.className;
    expect(cls).toContain('bg-destructive/10');
    expect(cls).toContain('text-destructive');
  });

  it('applies warning bg + text when tone=warn', () => {
    const { container } = render(Alert, { props: { tone: 'warn' } });
    const cls = container.querySelector('[role="alert"]')!.className;
    expect(cls).toContain('bg-warning/10');
    expect(cls).toContain('text-warning');
  });

  it('applies success bg + text when tone=up', () => {
    const { container } = render(Alert, { props: { tone: 'up' } });
    const cls = container.querySelector('[role="alert"]')!.className;
    expect(cls).toContain('bg-success/10');
    expect(cls).toContain('text-success');
  });

  it('applies accent bg + text when tone=accent', () => {
    const { container } = render(Alert, { props: { tone: 'accent' } });
    const cls = container.querySelector('[role="alert"]')!.className;
    expect(cls).toContain('bg-accent/10');
    expect(cls).toContain('text-accent');
  });

  it('renders title when provided', () => {
    const { getByText } = render(Alert, { props: { title: 'Something went wrong' } });
    expect(getByText('Something went wrong')).toBeInTheDocument();
  });
});
