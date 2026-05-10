<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLInputAttributes } from 'svelte/elements';

  interface Props extends Omit<HTMLInputAttributes, 'type' | 'value' | 'class'> {
    value?: string | number;
    type?: 'text' | 'email' | 'password' | 'url' | 'number' | 'search';
    error?: boolean;
    iconLeft?: Snippet;
  }

  let {
    value = $bindable(''),
    type = 'text',
    error = false,
    iconLeft,
    ...rest
  }: Props = $props();

  const inputClass = $derived(
    `w-full bg-card-elevated border rounded py-2 ${iconLeft ? 'pl-9 pr-3' : 'px-3'} text-foreground placeholder:text-muted-foreground transition-colors
     focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1 focus:ring-offset-background
     disabled:opacity-50 disabled:cursor-not-allowed
     ${error ? 'border-destructive' : 'border-border'}`
  );
</script>

{#if iconLeft}
  <div class="relative w-full">
    <span class="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground/60 pointer-events-none flex items-center">
      {@render iconLeft()}
    </span>
    <input
      {...rest}
      bind:value
      {type}
      aria-invalid={error || undefined}
      class={inputClass}
    />
  </div>
{:else}
  <input
    {...rest}
    bind:value
    {type}
    aria-invalid={error || undefined}
    class={inputClass}
  />
{/if}
