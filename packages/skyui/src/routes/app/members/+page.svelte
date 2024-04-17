<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->

<!-- #region JS -->
<script lang="ts">
  import PageTitle from '$lib/components/ui/page-title.svelte';
  import Drawer from '$lib/components/ui/drawer.svelte';
  import MemberForm from '$lib/components/member-form.txt';
  export let data
  const member = data.member || null
  
  </script>
<!-- #endregion -->


<!-- #region HTML -->
<Drawer isOpen={member}>
  {#if member}
    {#if member.id != 0}
      <MemberForm member={member}/>
    {/if}
    {#if member.id == 0}
      <MemberForm />
    {/if}
  {/if}
  <a href="/members/4">Bob</a>
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


