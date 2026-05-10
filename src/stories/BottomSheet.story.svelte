<script lang="ts">
  import { BottomSheet } from '../lib';

  interface Props {
    open?: boolean;
    height?: 'half' | 'full';
  }

  let { open = $bindable(true), height = 'half' }: Props = $props();
</script>

<BottomSheet bind:open {height} onclose={() => { open = false; }}>
  <div class="flex flex-col gap-3 p-4">
    <h3 class="text-foreground font-medium">Service details</h3>
    <p class="text-sm text-muted-foreground">
      This is sample content inside a bottom sheet. Drag down to dismiss, drag up for full height.
    </p>
    <ul class="text-sm text-muted-foreground list-disc pl-5 space-y-1">
      <li>API endpoint: https://api.example.com</li>
      <li>Latency p50: 14ms</li>
      <li>Database: PostgreSQL</li>
    </ul>
  </div>
</BottomSheet>
