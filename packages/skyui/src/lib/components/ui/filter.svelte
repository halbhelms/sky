<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->

<!-- #region TS -->
<script lang="ts">
  import SVGIcon from '$lib/components/ui/svg-icon.svelte'
  export let label: string
  export let actionOn: Function
  export let actionOff: Function

  function handleClick() {
    if (isOpen) {
      isOpen = false
      actionOff()
    } else {
      isOpen = true
      actionOn()
    }
  }

  let isOpen = false
</script>
<!-- #endregion -->


<!-- #region HTML -->
<section class="filter-component">
  <div on:click={handleClick} class="click-target">
   <SVGIcon iconName="filter" width="24" height="24" /> {label}
  </div>
</section>
<!-- #endregion -->


<!-- #region CSS -->
<style>
  .filter-component {
    text-decoration: underline;
    cursor: pointer;
    max-width: 12ch;
    font-size: 0.75rem;
    user-select: none;
  }

  .click-target {
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
  }
</style>
<!-- #endregion -->