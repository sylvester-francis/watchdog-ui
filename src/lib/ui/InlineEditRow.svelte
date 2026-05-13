<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    label: string;
    editing?: boolean;
    success?: string;
    /** Called when the display-mode 'Edit' link is clicked. */
    onEdit?: () => void;
    /** Snippet rendered when !editing. Typically the current value. */
    display?: Snippet;
    /** Snippet rendered when editing. Typically a form with its own Save/Cancel buttons. */
    edit?: Snippet;
  }

  let { label, editing = false, success, onEdit, display, edit }: Props = $props();
</script>

<div data-inline-edit-row data-editing={editing} class="py-4">
  {#if !editing}
    <div class="flex items-center justify-between gap-4">
      <div class="min-w-0">
        <div class="text-sm text-muted-foreground">{label}</div>
        {#if display}
          <div class="mt-1">{@render display()}</div>
        {/if}
      </div>
      {#if onEdit}
        <button
          type="button"
          onclick={onEdit}
          class="shrink-0 text-sm text-foreground/70 underline-offset-4 transition-colors hover:text-foreground hover:underline"
        >
          Edit
        </button>
      {/if}
    </div>
    {#if success}
      <p class="mt-2 font-mono tabular-nums text-xs text-success">
        <span aria-hidden="true">●</span> {success}
      </p>
    {/if}
  {:else if edit}
    <div class="space-y-3">
      <div class="text-sm text-muted-foreground">{label}</div>
      {@render edit()}
    </div>
  {/if}
</div>
