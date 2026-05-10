<script lang="ts">
  import { EmptyState, Button } from '../lib';

  interface Props {
    title?: string;
    description?: string;
    showCta?: boolean;
  }

  let {
    title = 'No incidents',
    description = 'Nothing here yet. Things look healthy across all services.',
    showCta = false,
  }: Props = $props();
</script>

<EmptyState {title} {description}>
  {#snippet cta()}
    {#if showCta}
      <Button variant="primary" size="sm">Add a service</Button>
    {/if}
  {/snippet}
</EmptyState>
