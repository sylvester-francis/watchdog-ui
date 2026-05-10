<script lang="ts">
  import { FormField, Input } from '../lib';

  interface Props {
    label?: string;
    error?: string | null;
    required?: boolean;
    htmlFor?: string;
    placeholder?: string;
    showInput?: boolean;
  }

  let {
    label,
    error = null,
    required = false,
    htmlFor,
    placeholder = 'Production server',
    showInput = true,
  }: Props = $props();
</script>

<FormField {label} {error} {required} {htmlFor}>
  {#if showInput}
    <Input id={htmlFor} {placeholder} />
  {/if}
</FormField>
