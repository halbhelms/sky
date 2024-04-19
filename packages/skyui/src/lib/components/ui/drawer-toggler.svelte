<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->

<!-- #region TS -->
<script lang="ts">
  import { SVGIcon } from "$lib/index.js";

  export let openDrawer: Function;
  export let closeDrawer: Function;
  
  let isOpen = false;
  
  function clickOpen() {
    isOpen = true;
    openDrawer();
  }

  function clickClose() {
    isOpen = false;
    closeDrawer();
  }

  import SvgIcon from "./svg-icon.svelte";
</script>

<!-- #endregion -->

<!-- #region HTML -->
<section class="drawer-toggler-component">
  <span class="opener icon" class:show={!isOpen}>
  <span on:click={() => clickOpen()}
    ><SVGIcon
      iconName="arrow-bar-left"
      width="28"
      height="28"
      fill="green"
    /></span>
  </span>
  
  <span class="closer icon" class:show={isOpen}>
  <span on:click={() => clickClose()}
    ><SVGIcon
      iconName="arrow-bar-right"
      width="28"
      height="28"
      fill="red"
    /></span>
  </span>
</section>

<!-- #endregion -->

<!-- #endregion -->

<!-- #region CSS -->
<style>
  .drawer-toggler-component {
    display: inline-block;
    /* justify-content: start; */
    align-items: center;
    max-width: 5rem;
    cursor: pointer;
  }

  span {
    display: inline-block;
  }

  .icon {
    display: none;
  }

  .show {
    display: inline-block;
  }
</style>
