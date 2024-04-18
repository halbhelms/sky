<!-- #region: TS -->
<script lang="ts">
  import type { LayoutData } from './$types'
  import Sidebar from '$lib/components/ui/sidebar.svelte';
  import UserLabel from '$lib/components/ui/user-label.svelte';
  export let data: LayoutData;
  
  const sidebarItems = [
    {label: 'Sales', path: '/', icon: 'graph-up', active: true},
    {label: 'Transactions', path: '/transactions', icon: 'credit-card', active: false},
    {label: 'Groups', path: '/groups', icon: 'globe-americas', active: false},
    {label: 'Members', path: '/members', icon: 'people', active: false},
  ]
</script>
<!-- #endregion -->


<!-- #region: HTML -->
<section class="container">
  <section class="sidebar">
    <UserLabel name="John Doe" title="Software Engineer" />
    <Sidebar {sidebarItems} />
   </section>
  
  <section class="main">
    <slot></slot>
  </section>
</section>
<!-- #endregion -->


<!-- #region: CSS -->
<style>
  .container {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 0.5rem;
  }

  .sidebar {
    background-color: white;
    color: #202020;
  }

  .main {
    background-color: white;
    color: #202020;
  }
</style>
<!-- #endregion -->


