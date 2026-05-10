<script lang="ts">
  import Input from '../Input.svelte';
</script>

<Input>
  {#snippet iconLeft()}
    <svg data-testid="icon-left" width="16" height="16"></svg>
  {/snippet}
</Input>
