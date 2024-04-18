<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->

<!-- #region: TS -->
<script lang="ts">
  import { page } from '$app/stores';
  import type { SidebarItem } from '$lib/types/sidebar-item.ts';
  
  export let sidebarItems: SidebarItem[]
</script>
<!-- #endregion -->


<!-- #region: HTML -->
<section class="sidebar-component">
{#each sidebarItems as item}
  <a href={item.path} class="sidebar-item" class:active={$page.url.pathname==item.path} >
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
    color: hsl(218, 100%, 58%);
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
    color: hsl(218, 100%, 58%);
    font-weight: 600;
    cursor: pointer;
  }

  i {
    margin-right: 0.5rem;
  }
</style>
<!-- #endregion -->