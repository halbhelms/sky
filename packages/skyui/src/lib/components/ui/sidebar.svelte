<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->

<!-- #region: TS -->
<script lang="ts">
  import { page } from '$app/stores';
  import type { SidebarItem } from '$lib/types/sidebar-item.ts';
  import SVGIcon from '$lib/components/ui/svg-icon.svelte';
  
  export let sidebarItems: SidebarItem[]
</script>
<!-- #endregion -->


<!-- #region: HTML -->
<section class="sidebar-component">
{#each sidebarItems as item}
  <span><SVGIcon iconName={item.icon} width='32' height='32' /></span>
  <a href={item.path} class="sidebar-item" class:active={$page.url.pathname==item.path} >
     {item.label}
  </a>
{/each}
</section>
<!-- #endregion -->


<!-- #region style -->
<style>
  .sidebar-component {
    max-width: 100%;
    display: grid;
    grid-template-columns: 30px 1fr;
    grid-auto-rows: 2rem;
    row-gap: 0.5rem;
    padding: 1rem;
    min-height: 100%;
    background-color: hsl(60, 0%, 98%);
    color: #202020;
    border-right: 1px solid hsl(60, 0%, 90%);
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