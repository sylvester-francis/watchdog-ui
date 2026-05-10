<script lang="ts">
  import { Sheet } from '../lib';

  interface Props {
    open?: boolean;
    side?: 'right' | 'left' | 'bottom';
    size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  }

  let { open = $bindable(true), side = 'right', size = 'sm' }: Props = $props();
</script>

<Sheet bind:open {side} {size} onclose={() => { open = false; }}>
  <div class="flex flex-col gap-3">
    <h3 class="text-foreground font-medium">Service health overview</h3>
    <p class="text-sm text-muted-foreground">
      This is sample content inside a sheet. Latency p50 is 14ms across the API endpoint.
    </p>
  </div>
</Sheet>
