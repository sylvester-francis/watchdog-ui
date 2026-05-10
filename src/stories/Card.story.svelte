<script lang="ts">
  import { Card } from '../lib';

  interface Props {
    variant?: 'default' | 'elevated' | 'accent';
    body?: string;
  }

  let { variant = 'default', body = 'Service health overview for the production cluster.' }: Props = $props();
</script>

<Card {variant}>
  <div class="flex flex-col gap-2">
    <h3 class="text-foreground font-medium">Service Health</h3>
    <p class="text-sm text-muted-foreground">{body}</p>
  </div>
</Card>
