<script lang="ts">
  export let member:any = null
</script>

{#if member}
  Edit form here
{:else}
  Add form here
{/if}