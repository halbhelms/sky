<!-- #region JS -->
<script lang="ts">
  // import type { PageData } from "./$types.js";
  import ContextMenu from '$lib/components/ui/context-menu.svelte';
  // export let data: PageData;
  // const { title } = data;

  function edit(rowId: number) {
    console.log('edit ' + rowId);
  }

  function archive(rowId: number) {
    console.log('archive ' + rowId);
  }

  const actions = [
    {label: 'Edit', fnc: edit, icon: 'plus-circle'},
    {label: 'Archive', fnc: archive, icon: 'pencil'}
  ];
</script>
<!-- #endregion -->

<!-- #region HTML -->
<ContextMenu {actions} id={5} />
<!-- <section>
  <h1 class="page-title">{title}</h1>
</section> -->

<!-- #endregion -->

<!-- #region CSS -->
<style>
  .page-title {
    font-size: 1.5rem;
    color: #202020;
    margin-bottom: 1rem;
  } 
</style>
<!-- #endregion -->`;
