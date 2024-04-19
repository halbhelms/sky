<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->

<!-- #region TS --> 
<script lang="ts">
  import Drawer from '$lib/components/ui/drawer.svelte';
  import ContextMenu from '$lib/components/ui/context-menu.svelte';
  // import Checkbox from '$lib/components/ui/checkbox.svelte';
  import Checkbox from '$lib/components/ui/checkbox-fancy.svelte';
  import Radio from '$lib/components/ui/radio-fancy.svelte';
  import Button from '$lib/components/ui/button.svelte';
  import UserLabel from '$lib/components/ui/user-label.svelte';
  import Slide from '$lib/components/ui/slide.svelte';
  import PageTitle from '$lib/components/ui/page-title.svelte';
  import PageTitleLink from '$lib/components/ui/page-title-link.svelte';
  import DrawerToggler from '$lib/components/ui/drawer-toggler.svelte';

  let drawerOpen: boolean = false;

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

  function radioAction(name: string, value: string) {
    console.log(name, value);
  }

  function openDrawer() {
    drawerOpen = true;
  }

  function closeDrawer() {
    drawerOpen = false;
  }
</script>
<!-- #endregion -->

<!-- #region HTML -->
<Drawer isOpen={drawerOpen} {closeDrawer}>
  <p>Drawer Content</p>
</Drawer>
<PageTitle title="Sales" />
<PageTitleLink text="Default"/>
<DrawerToggler {openDrawer} {closeDrawer} />
<ContextMenu {actions} id={5} --bg-color='#f4f4f6' />
<Slide label="Show archived"/>
<Radio label="Radio 1" name="my-radio" value="hi" action={radioAction} />
<Checkbox label="Checkbox 1" name="my-checkbox" value="1" action={() => console.log('Checkbox 1')} />


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
