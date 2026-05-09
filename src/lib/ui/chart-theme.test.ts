import { describe, it, expect } from 'vitest';
import { createChartTheme } from './chart-theme';
import { watchdogTokens } from '../tokens/watchdog';

describe('createChartTheme', () => {
  it('returns an object with the expected keys', () => {
    const t = createChartTheme(watchdogTokens);
    expect(t).toHaveProperty('accent');
    expect(t).toHaveProperty('statusUp');
    expect(t).toHaveProperty('statusDown');
    expect(t).toHaveProperty('statusWarn');
    expect(t).toHaveProperty('text');
    expect(t).toHaveProperty('grid');
    expect(t).toHaveProperty('fontMono');
  });

  it('returns the active brand accent color', () => {
    const t = createChartTheme(watchdogTokens);
    expect(t.accent).toBe(watchdogTokens.color.accent);
  });

  it('returns the active brand mono-family font string', () => {
    const t = createChartTheme(watchdogTokens);
    expect(t.fontMono).toBe(watchdogTokens.font.mono);
  });
});
