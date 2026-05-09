import type { Tokens } from '../tokens/types';

export function createChartTheme(tokens: Tokens) {
  return {
    accent:     tokens.color.accent,
    statusUp:   tokens.color.statusUp,
    statusDown: tokens.color.statusDown,
    statusWarn: tokens.color.statusWarn,
    text:       tokens.color.textMuted,
    grid:       tokens.color.border,
    fontMono:   tokens.font.mono,
  };
}
