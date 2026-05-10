<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLSelectAttributes } from 'svelte/elements';

  type Size = 'sm' | 'md';

  interface Props extends Omit<HTMLSelectAttributes, 'value' | 'class' | 'size'> {
    value?: string;
    size?: Size;
    error?: boolean;
    children?: Snippet;
  }

  let {
    value = $bindable(''),
    size = 'md',
    error = false,
    children,
    ...rest
  }: Props = $props();

  const sizeClasses: Record<Size, string> = {
    sm: 'px-2.5 py-1.5 text-xs',
    md: 'px-3 py-2 text-base',
  };
</script>

<select
  {...rest}
  bind:value
  data-size={size}
  aria-invalid={error || undefined}
  class="w-full bg-card-elevated border rounded {sizeClasses[size]} text-foreground transition-colors
         focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1 focus:ring-offset-background
         disabled:opacity-50 disabled:cursor-not-allowed
         {error ? 'border-destructive' : 'border-border'}"
>
  {@render children?.()}
</select>
