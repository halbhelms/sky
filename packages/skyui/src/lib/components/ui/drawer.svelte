<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->

<!-- #region: TS -->
<script lang="ts">
  export let isOpen:boolean = false; // Control the state of the drawer

  // Function to toggle the drawer's state
  function toggleDrawer() {
    isOpen = !isOpen;
  }
</script>
<!-- #endregion -->


<!-- #region: HTML -->
<!-- Drawer structure -->
<div class="drawer" class:open={isOpen}>
  <div class="vertical" on:click={toggleDrawer}>
  </div>
  <!-- Your drawer content here -->
  <main>
    <slot />
  </main>
</div>
<!-- #endregion -->


<!-- #region: CSS -->
<style>
  .drawer {
    display: grid;
    grid-template-columns: 1.5rem 1fr;
    height: 100vh;
    min-width: 1.5rem; /* Start with a small min-width */
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    background-color: hsl(225, 79%, 84%);
    overflow-x: hidden;
    transition: min-width 2s ease; /* Transition min-width */
    color: #202020;
  }

  .drawer.open {
    min-width: 500px; /* Open drawer */
    transition: min-width 2s ease; /* Transition min-width */
    /* No need for a separate transition declaration */
  }

  .vertical {
    display: flex;
    writing-mode: vertical-lr;
    align-items: center;
    font-weight: 600;
    cursor: pointer;
  }

  main {
    background-color: #e6eaec;
    color: #202020;
    padding: 1rem 0.5rem 1rem 0.5rem;
  }
</style>
<!-- #endregion -->