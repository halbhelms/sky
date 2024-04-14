<!-- #region JS -->
<script lang="ts">
  import type { PageData } from "./$types";
  // import Button from '$lib/components/ui/compound/button.svelte'
  import SvgIcon from '$lib/components/ui/base/svg-icon.svelte';
  import PageTitle from '$lib/components/ui/compound/page-title.svelte'
  export let data: PageData;
  export let title: string = 'Page title';

function addItem() {
  console.log('add item');
}

function editItem(id: string) {
  console.log(`edit item ${id}`);
}

function removeItem(id: string) {
  console.log(`remove item ${id}`);
}

function addRegion() {
  console.log('Add a region');
}
  const regionsActions: Array<Object> = data.regionsActions
</script>
<!-- #endregion -->

<!-- #region HTML -->
<section>
  <SvgIcon iconName="plus-circle"/>
  <!-- <PageTitle title="Regions" add={true} action={addRegion}/> -->
</section>
<!-- #endregion -->

<!-- #region CSS -->
<style>
.red {
  color: red;
}
</style>