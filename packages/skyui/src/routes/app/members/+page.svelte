<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->

<!-- #region JS -->
<script lang="ts">
  import PageTitle from '$lib/components/ui/base/elemental/page-title.svelte';
  import Drawer from '$lib/components/ui/compound/drawer.svelte';
  export let data
  const member = data.member || null
  
  </script>
<!-- #endregion -->


<!-- #region HTML -->
<Drawer isOpen={member}>
  {#if member}
    {#if member.id != 0}
      Edit {member.name}
    {/if}
    {#if member.id == 0}
      Add Member
    {/if}
  {/if}
</Drawer>
<section class="members-page">
  <PageTitle title="Members" add={true}/>
</section>
<!-- #endregion -->


<!-- #region CSS -->
<style>
  .members-page {

  }
</style>
<!-- #endregion -->


