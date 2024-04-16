<!-- #region SCRIPT -->
<script lang="ts">
  import type { LayoutData } from "./$types";
  export let data: LayoutData;

  import Accordion from '@sky/skyui';
  import Drawer from '$lib/ui/compound/Drawer.svelte';
  import DateRange from '$lib/ui/base/DateRange.svelte';
  import Sidebar from '$lib/ui/compound/Sidebar.svelte';
  import Groups from '$lib/ui/app/Groups.svelte';
  import Views from '$lib/ui/app/Views.svelte';
  import UserLabel from '$lib/ui/compound/UserLabel.svelte';


  $: views = data.props.views || [];
  $: groups = data.props.groups || [];
  $: sidebarItems = data.props.sidebarItems || [];
  $: name = data.props.userInfo.name;
  $: title = data.props.userInfo.title;
</script>
<!-- #endregion -->




<!-- #region HTML -->
<section class="layout">
  <aside>
    <UserLabel {name} {title} />
  <Sidebar {sidebarItems} />
  </aside>

  <section class="main">
    <slot />
  </section>
</section>

<Drawer>
  <Accordion title="Date Range" icon="bi-calendar-range">
    <DateRange />
  </Accordion>
  <Accordion title="Groups" icon="bi-globe-americas">
    <Groups {groups} />
  </Accordion>
  <Accordion title="Views" icon="bi-window-fullscreen">
    <Views {views} />
  </Accordion>
</Drawer>
<!-- #endregion -->





<!-- #region STYLE -->
<style>
  .layout {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 0.5rem;
  }

  aside {
    background-color: white;
    color: #202020;
  }

  .main {
    background-color: white;
    color: #202020;
  }
</style>
<!-- #endregion -->
