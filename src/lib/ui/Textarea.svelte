<script lang="ts">
  import type { HTMLTextareaAttributes } from 'svelte/elements';

  interface Props extends Omit<HTMLTextareaAttributes, 'value' | 'class'> {
    value?: string;
    error?: boolean;
  }

  let {
    value = $bindable(''),
    rows = 3,
    error = false,
    ...rest
  }: Props = $props();
</script>

<textarea
  {...rest}
  bind:value
  {rows}
  aria-invalid={error || undefined}
  class="w-full bg-card-elevated border rounded px-3 py-2 text-foreground placeholder:text-muted-foreground transition-colors
         focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1 focus:ring-offset-background
         disabled:opacity-50 disabled:cursor-not-allowed
         {error ? 'border-destructive' : 'border-border'}"
></textarea>
