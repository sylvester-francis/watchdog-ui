<script lang="ts">
  type Variant = 'underline' | 'pill';

  interface Option {
    value: string;
    label: string;
  }

  interface Props {
    options: Option[];
    value?: string;
    variant?: Variant;
    onchange?: (newValue: string) => void;
  }

  let { options, value = $bindable(''), variant = 'underline', onchange }: Props = $props();

  function selectTab(newValue: string) {
    value = newValue;
    onchange?.(newValue);
  }

  const listClasses: Record<Variant, string> = {
    underline: 'flex gap-1 border-b border-border',
    pill: 'flex items-center gap-1',
  };

  function tabClasses(variant: Variant, active: boolean): string {
    if (variant === 'pill') {
      return active
        ? 'px-2.5 py-1 text-xs rounded-md transition-colors bg-foreground/[0.08] text-foreground font-medium'
        : 'px-2.5 py-1 text-xs rounded-md transition-colors text-muted-foreground hover:text-foreground hover:bg-foreground/[0.04]';
    }
    return active
      ? 'px-4 py-2 text-sm font-medium transition-colors border-b-2 border-accent text-foreground'
      : 'px-4 py-2 text-sm font-medium transition-colors border-b-2 border-transparent text-muted-foreground hover:text-foreground';
  }
</script>

<div role="tablist" data-active={value} data-variant={variant} class={listClasses[variant]}>
  {#each options as opt (opt.value)}
    <button
      role="tab"
      type="button"
      aria-selected={opt.value === value}
      data-value={opt.value}
      onclick={() => selectTab(opt.value)}
      class={tabClasses(variant, opt.value === value)}
    >
      {opt.label}
    </button>
  {/each}
</div>
