<!-- #region SCRIPT -->
<script lang="ts">
  import type { LayoutData } from "./$types";
  export let data: LayoutData;

  import Accordion from '@sky/skyui';
  import Drawer from '@sky/skyui';
  import DateRange from '@sky/skyui';
  import Sidebar from '@sky/skyui';
  import Groups from '@sky/skyui';
  import Views from '@sky/skyui';
  import UserLabel from '@sky/skyui';


  $: views = data.views || [];
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
