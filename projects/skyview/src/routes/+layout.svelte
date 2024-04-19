<!-- #region SCRIPT -->
<script lang="ts">
  import type { LayoutData } from "./$types";
  export let data: LayoutData;
  const { sidebarItems } = data
  // import { Accordion, Drawer, DateRange, Sidebar, Groups, Views, UserLabel } from '@sky/skyui';
  </script>
<!-- #endregion -->




<!-- #region HTML -->
<section class="layout">
  <aside>
    <!-- <UserLabel {name} {title} />
  <Sidebar {sidebarItems} /> -->
  </aside>

  <section class="main">
    <slot />
  </section>
</section>
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
