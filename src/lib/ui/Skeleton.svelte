<script lang="ts">
  type Variant = 'text' | 'chart' | 'tableRow' | 'card';
  type Emphasis = 'primary' | 'secondary' | 'tertiary';

  interface Props {
    variant?: Variant;
    emphasis?: Emphasis;
    width?: string;
    height?: string;
  }

  const defaults: Record<Variant, { width: string; height: string }> = {
    text:     { width: '100%', height: '1rem' },
    chart:    { width: '100%', height: '240px' },
    tableRow: { width: '100%', height: '40px' },
    card:     { width: '100%', height: '120px' },
  };

  const emphasisClasses: Record<Emphasis, string> = {
    primary:   'bg-muted',
    secondary: 'bg-muted/60',
    tertiary:  'bg-muted/30',
  };

  let { variant = 'text', emphasis = 'primary', width, height }: Props = $props();

  const finalWidth = $derived(width ?? defaults[variant].width);
  const finalHeight = $derived(height ?? defaults[variant].height);
</script>

<div
  data-variant={variant}
  data-emphasis={emphasis}
  style:width={finalWidth}
  style:height={finalHeight}
  class="rounded animate-pulse {emphasisClasses[emphasis]}"
></div>
