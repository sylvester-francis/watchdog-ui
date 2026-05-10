<script lang="ts">
  import { Modal, Button } from '../lib';

  interface Props {
    open?: boolean;
    size?: 'sm' | 'md' | 'lg' | 'xl';
  }

  let { open = $bindable(true), size = 'md' }: Props = $props();
</script>

<Modal bind:open {size} onclose={() => { open = false; }}>
  <div class="flex flex-col gap-4">
    <h3 class="text-foreground font-medium text-lg">Confirm action</h3>
    <p class="text-sm text-muted-foreground">
      This is sample content inside a modal. Are you sure you want to remove this service from the dashboard?
    </p>
    <div class="flex gap-2 justify-end">
      <Button variant="ghost" size="sm" onclick={() => { open = false; }}>Cancel</Button>
      <Button variant="destructive" size="sm">Remove</Button>
    </div>
  </div>
</Modal>
