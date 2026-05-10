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
| `Button` | Action button with variants (primary/secondary/ghost/destructive/outline) + tones (accent/up/warn/down) |
| `Input`, `Textarea`, `Select`, `Checkbox` | Form controls |
| `FormField` | Label + control + error wrapper |
| `Modal` | Centered modal with focus trap, ESC, overlay click, sizes (sm/md/lg/xl) |
| `Sheet` | Side/bottom slide-over with sizes |
| `BottomSheet` | Mobile bottom sheet with drag-to-dismiss + two heights |
| `Pill`, `StatusBadge`, `StatusDot` | Status indicators |
| `StatBlock`, `Sparkline`, `ChartFrame` | Data viz primitives |
| `Card`, `Tabs`, `Skeleton`, `EmptyState`, `Tooltip` | Layout helpers |

All primitives consume CSS variables — never hardcode colors. Theme-blind by design.

## Storybook

Live demo of every primitive with theme tokens applied: **[sylvester-francis.github.io/watchdog-ui](https://sylvester-francis.github.io/watchdog-ui/)**

Run locally: `bun run storybook` (port 6006).

## License

[AGPL-3.0](./LICENSE) © Sylvester Francis
