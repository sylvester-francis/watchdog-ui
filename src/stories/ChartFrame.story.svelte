<script lang="ts">
  import { ChartFrame, Sparkline } from '../lib';

  interface Props {
    title?: string;
    subtitle?: string;
    height?: string;
    loading?: boolean;
  }

  let {
    title = 'Latency p50',
    subtitle = 'Last 24 hours',
    height = '120px',
    loading = false,
  }: Props = $props();
</script>

<div class="w-96">
  <ChartFrame {title} {subtitle} {height} {loading}>
    <div class="h-full flex items-center justify-center">
      <Sparkline
        data={[10, 12, 11, 14, 13, 15, 14, 16, 15, 18, 17, 19]}
        status="up"
        fill={true}
        width={300}
        height={80}
      />
    </div>
  </ChartFrame>
</div>
