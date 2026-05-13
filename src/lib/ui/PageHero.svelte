<script lang="ts">
  import type { Snippet } from 'svelte';
  import StatusPip from './StatusPip.svelte';

  type Tone = 'success' | 'destructive' | 'warning' | 'accent' | 'muted';
  type Level = 1 | 2;

  interface Props {
    title: string;
    meta?: string;
    metaPip?: Tone;
    description?: string;
    level?: Level;
    action?: Snippet;
  }

  let { title, meta, metaPip, description, level = 1, action }: Props = $props();
</script>

<header class="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
  <div class="min-w-0">
    {#if meta || metaPip}
      <div class="flex items-center gap-2 font-mono tabular-nums text-xs text-muted-foreground">
        {#if metaPip}
          <StatusPip tone={metaPip} />
        {/if}
        {#if meta}
          <span class="uppercase tracking-wider">{meta}</span>
        {/if}
      </div>
    {/if}
    {#if level === 2}
      <h2 class="truncate text-xl font-medium text-foreground {meta || metaPip ? 'mt-1.5' : ''} sm:text-2xl md:text-3xl">{title}</h2>
    {:else}
      <h1 class="truncate text-xl font-medium text-foreground {meta || metaPip ? 'mt-1.5' : ''} sm:text-2xl md:text-3xl">{title}</h1>
    {/if}
    {#if description}
      <p class="mt-1 text-sm text-muted-foreground">{description}</p>
    {/if}
  </div>
  {#if action}
    <div class="shrink-0 self-start sm:self-auto">
      {@render action()}
    </div>
  {/if}
</header>
