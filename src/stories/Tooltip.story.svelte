<script lang="ts">
  import { Tooltip } from '../lib';

  interface Props {
    label: string;
    content?: string;
  }

  let { label, content = 'Hover for details' }: Props = $props();
</script>

<Tooltip {label}>
  <span class="underline decoration-dotted cursor-help text-foreground">{content}</span>
</Tooltip>
