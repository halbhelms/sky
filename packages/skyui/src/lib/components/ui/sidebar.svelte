<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->

<!-- #region: TS -->
<script lang="ts">
  import type { SidebarItem } from '$lib/types/sidebar-item.ts';
  
  export let sidebarItems: SidebarItem[]
  // loop over sidebar items with forEach, adding an active property and setting the first item to active
  sidebarItems && sidebarItems.forEach(item => {
    item.active = false;
  });
  sidebarItems && (sidebarItems[0].active = true);

  function handleClick(index: number) {
    // loop over all the sidebar items and set the color to the default
    sidebarItems.forEach(item => {
        item.active = false;
    });
    // set the active item to true
    sidebarItems[index].active = true;
  };
</script>
<!-- #endregion -->


<!-- #region: HTML -->
<section class="sidebar-component">
{#each sidebarItems as item, index}
  <a href={item.path} class="sidebar-item" class:active={item.active}  on:click = {() => handleClick(index)}>
    <i class={"bi-{item.icon}"}></i> {item.label}
  </a>
{/each}
</section>
<!-- #endregion -->


<!-- #region style -->
<style>
  .sidebar-component {
    max-width: 100%;
    display: grid;
    grid-auto-rows: 2rem;
    gap: 0.5rem;
    padding: 1rem;
    min-height: 100%;
    background-color: white;
    color: #202020;
  }

  .active {
    color: var(--sky-color);
    font-weight: 600;
  }

  a {
    text-decoration: none;
    color: #202020;
  }

  .sidebar-item {
    display: grid;
    grid-template-columns: 40px 1fr;
    grid-auto-rows: 2.5rem;
    row-gap: 2rem;
    padding-left: 1rem;
  }

  .sidebar-item:hover {
    color: var(--sky-color);
    font-weight: 600;
    cursor: pointer;
  }

  i {
    margin-right: 0.5rem;
  }
</style>
<!-- #endregion -->