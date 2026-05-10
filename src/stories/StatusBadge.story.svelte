<script lang="ts">
  import { StatusBadge } from '../lib';

  type Status = 'up' | 'down' | 'warn' | 'expired' | 'maintenance' | 'unknown';

  interface Props {
    status: Status;
    label?: string;
  }

  let { status, label = 'Production server' }: Props = $props();
</script>

<StatusBadge {status}>{label}</StatusBadge>
