<!-- #region JS -->
<script lang="ts">
  // import type { PageData } from "./$types.js";
  import ContextMenu from '$lib/components/ui/context-menu.svelte';
  import Checkbox from '$lib/components/ui/checkbox.svelte';
  import ExpCheckbox from '$lib/components/ui/checkbox-fancy.svelte';
  import Radio from '$lib/components/ui/radio-fancy.svelte';
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
<Radio label="Radio 1" name="my-radio" value="hi" action={(name, value)=> console.log(name, value)} />
<Checkbox title="Checkbox 1" name="my-checkbox" value="1" action={() => console.log('Checkbox 1')} />

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
