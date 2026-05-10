<script lang="ts">
  import { Select } from '../lib';

  interface Props {
    value?: string;
    disabled?: boolean;
    error?: boolean;
  }

  let { value = $bindable('postgres'), disabled = false, error = false }: Props = $props();
</script>

<Select bind:value {disabled} {error}>
  <option value="postgres">PostgreSQL</option>
  <option value="mysql">MySQL</option>
  <option value="sqlite">SQLite</option>
  <option value="redis">Redis</option>
</Select>
