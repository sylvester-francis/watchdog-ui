<script lang="ts">
  import type { Snippet } from 'svelte';

  type Columns = 2 | 3 | 4;

  interface Props {
    columns?: Columns;
    children?: Snippet;
  }

  let { columns = 4, children }: Props = $props();

  // Mobile collapses to 1 column when desktop is 3 (3 doesn't halve cleanly),
  // and to 2 columns when desktop is 2 or 4. The hairline separators come
  // from the gap-px + bg-border parent trick.
  const columnClasses: Record<Columns, string> = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-3',
    4: 'grid-cols-2 sm:grid-cols-4',
  };
</script>

<section
  data-columns={columns}
  class="grid gap-px overflow-hidden border-y border-border bg-border {columnClasses[columns]}"
>
  {@render children?.()}
</section>
