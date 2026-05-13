<script lang="ts">
  import type { Snippet } from 'svelte';

  type Level = 2 | 3 | 4;

  interface Props {
    title: string;
    count?: string | number;
    level?: Level;
    action?: Snippet;
    meta?: Snippet;
  }

  let { title, count, level = 3, action, meta }: Props = $props();
</script>

<div class="flex items-center justify-between gap-3 border-b border-border pb-3">
  <div class="flex min-w-0 items-baseline gap-2">
    {#if level === 2}
      <h2 class="truncate text-sm font-medium text-foreground">{title}</h2>
    {:else if level === 4}
      <h4 class="truncate text-sm font-medium text-foreground">{title}</h4>
    {:else}
      <h3 class="truncate text-sm font-medium text-foreground">{title}</h3>
    {/if}
    {#if count !== undefined && count !== null && count !== ''}
      <span class="shrink-0 font-mono tabular-nums text-[11px] text-muted-foreground">{count}</span>
    {/if}
    {#if meta}
      <span class="shrink-0 font-mono tabular-nums text-[11px] text-muted-foreground">
        {@render meta()}
      </span>
    {/if}
  </div>
  {#if action}
    <div class="shrink-0">
      {@render action()}
    </div>
  {/if}
</div>
