<script lang="ts">
  import type { Snippet } from 'svelte';

  type Tone = 'success' | 'destructive' | 'warning' | 'accent' | 'muted' | 'default';

  interface Props {
    label: string;
    value: string | number;
    valueTone?: Tone;
    sublabel?: Snippet;
  }

  let { label, value, valueTone = 'default', sublabel }: Props = $props();

  const toneClasses: Record<Tone, string> = {
    default:     'text-foreground',
    success:     'text-success',
    destructive: 'text-destructive',
    warning:     'text-warning',
    accent:      'text-accent',
    muted:       'text-muted-foreground',
  };
</script>

<div data-stat-cell class="flex flex-col bg-background px-4 py-3.5">
  <div class="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">{label}</div>
  <div class="mt-1 font-mono tabular-nums text-lg {toneClasses[valueTone]}">{value}</div>
  {#if sublabel}
    <div class="mt-0.5 font-mono tabular-nums text-[11px] text-muted-foreground">
      {@render sublabel()}
    </div>
  {/if}
</div>
