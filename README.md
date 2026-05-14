# watchdog-ui

Design primitives for Watchdog and downstream consumers — Svelte 5 components driven by typed design tokens.

## Install

Published to both [npmjs.com](https://www.npmjs.com/package/@sylvester-francis/watchdog-ui) (default, no auth) and [GitHub Packages](https://github.com/sylvester-francis/watchdog-ui/pkgs/npm/watchdog-ui) (auth required).

```bash
bun add @sylvester-francis/watchdog-ui
# or
npm install @sylvester-francis/watchdog-ui
```

To pull from GitHub Packages instead (e.g. for in-org mirrors), add to `.npmrc`:

```
@sylvester-francis:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

## Usage

```svelte
<script lang="ts">
  import { Button, Pill, StatusDot, Modal, FormField, Input } from '@sylvester-francis/watchdog-ui';
</script>

<Button variant="primary" onclick={() => (open = true)}>Create</Button>

<Modal bind:open onclose={() => (open = false)} size="md">
  <h3>Hello</h3>
  <FormField label="Name" htmlFor="name">
    <Input id="name" bind:value={name} placeholder="Your name" />
  </FormField>
  <Button variant="primary" type="submit">Save</Button>
</Modal>
```

## Design tokens

The package ships a `Tokens` interface and a default `watchdogTokens` value. Consumers can re-export them or supply their own values matching the same shape. Token VALUES are CSS variables consumed by the primitives — change values, primitives follow.

```ts
import { type Tokens, watchdogTokens, watchdogTokensToCSS } from '@sylvester-francis/watchdog-ui/tokens';

// Default values:
console.log(watchdogTokens.color.accent); // '#3b82f6'

// Generate CSS to inject into your app:
const css = watchdogTokensToCSS(watchdogTokens);
```

For chart theming:

```ts
import { createChartTheme } from '@sylvester-francis/watchdog-ui';
import { watchdogTokens } from '@sylvester-francis/watchdog-ui/tokens';

const theme = createChartTheme(watchdogTokens);
// { accent, statusUp, statusDown, statusWarn, text, grid, fontMono }
```

## Primitives

| Component | Purpose |
| --- | --- |
| `Button`, `LinkButton` | Action button (variants primary/secondary/ghost/destructive/outline) and anchor-styled-as-button equivalent; both support tones (accent/up/warn/down) |
| `Input`, `Textarea`, `Select`, `Checkbox` | Form controls |
| `FormField` | Label + control + error wrapper |
| `Modal` | Centered modal with focus trap, ESC, overlay click, sizes (sm/md/lg/xl) |
| `Sheet` | Side/bottom slide-over with sizes |
| `BottomSheet` | Mobile bottom sheet with drag-to-dismiss + two heights |
| `Pill` | Decorative chip (legacy — newer Console-aesthetic consumers should prefer `StatusPip`) |
| `StatusPip` | 1.5px circular status indicator paired with uppercase mono label — the Console-aesthetic primary status primitive |
| `StatusBadge`, `StatusDot` | Larger status indicators (badges + dots) |
| `StatBlock` | Self-contained stat card with label / value / trend |
| `StatGrid` + `StatCell` | Hairline-divided horizontal stat row (Console aesthetic — `gap-px bg-border` between cells) |
| `Sparkline`, `ChartFrame` | Data-viz primitives; pair with `createChartTheme` for theme-aware Chart.js options |
| `PageHero` | Page header with optional eyebrow, title, breadcrumb, and actions |
| `SectionHeader` | Section heading row with hairline bottom-border and optional action slot |
| `InlineEditRow` | Display row that collapses into an edit form on click (used for settings username/password etc.) |
| `Alert` | Inline alert banner with severity tones |
| `Card`, `Tabs`, `Skeleton`, `EmptyState`, `Tooltip` | Layout helpers |

All primitives consume CSS variables — never hardcode colors. Theme-blind by design.

### Console aesthetic primitives (0.1.6–0.2.0)

Versions 0.1.6 through 0.2.0 added a Console set used by both Watchdog consumers for an enterprise-modern "Linear/Honeycomb-inspired" look: hairline-divided stat rows (`StatGrid` + `StatCell`), 1.5px status pips (`StatusPip`) instead of colored chip Pills, hero headers with breadcrumb (`PageHero`), section headings with bottom border (`SectionHeader`), and inline-edit list rows (`InlineEditRow`). New code should prefer the Console primitives; older `Pill` / chip-style calls remain supported for backward compatibility.

## Storybook

Live demo of every primitive with theme tokens applied: **[sylvester-francis.github.io/watchdog-ui](https://sylvester-francis.github.io/watchdog-ui/)**

Run locally: `bun run storybook` (port 6006).

## License

[AGPL-3.0](./LICENSE) © Sylvester Francis
