<script lang="ts">
  type Tone = 'success' | 'destructive' | 'warning' | 'accent' | 'muted';

  interface Props {
    tone?: Tone;
    pulse?: boolean;
    label?: string;
  }

  let { tone = 'muted', pulse = false, label }: Props = $props();

  const toneClasses: Record<Tone, string> = {
    success:     'bg-success',
    destructive: 'bg-destructive',
    warning:     'bg-warning',
    accent:      'bg-accent',
    muted:       'bg-muted-foreground/50',
  };
</script>

<span
  data-tone={tone}
  aria-label={label}
  aria-hidden={label ? undefined : 'true'}
  class="inline-block h-1.5 w-1.5 shrink-0 rounded-full {toneClasses[tone]}"
  class:animate-pulse={pulse}
></span>
