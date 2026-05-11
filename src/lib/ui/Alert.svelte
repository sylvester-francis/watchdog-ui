<script lang="ts">
  import type { Snippet } from 'svelte';

  type Tone = 'down' | 'warn' | 'up' | 'accent';

  interface Props {
    tone?: Tone;
    title?: string;
    icon?: Snippet;
    children?: Snippet;
  }

  let { tone = 'down', title, icon, children }: Props = $props();

  const toneClasses: Record<Tone, string> = {
    down:   'bg-destructive/10 border-destructive/20 text-destructive',
    warn:   'bg-warning/10 border-warning/20 text-warning',
    up:     'bg-success/10 border-success/20 text-success',
    accent: 'bg-accent/10 border-accent/20 text-accent',
  };
</script>

<div
  role="alert"
  data-tone={tone}
  class="rounded-md border px-3 py-2 flex items-start gap-2 text-sm {toneClasses[tone]}"
>
  {#if icon}
    <span class="shrink-0 mt-0.5">{@render icon()}</span>
  {/if}
  <div class="flex-1 min-w-0">
    {#if title}
      <p class="font-medium leading-tight">{title}</p>
    {/if}
    {@render children?.()}
  </div>
</div>
