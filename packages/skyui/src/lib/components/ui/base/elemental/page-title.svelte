<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->

<!-- #region JS -->
<script lang="ts">
  import SvgIcon from "$lib/components/ui/base/svg-icon.svelte";

  export let title: string = `Page Title`;
  export let add: boolean = false;
  export let actionLabel: string = "Add Something";
  export let action: () => void = () => {
    console.log("add item");
  };
</script>
<!-- #endregion -->


<!-- #region HTML -->
<section class="page-title-component">
  <h1>{title}</h1>
  {#if add}
  <div class="add" on:click={action}>
    <SvgIcon iconName="plus-circle" width="24" height="24" fill="green" />
    <span>{actionLabel}</span>
  </div>
  {/if}
</section>
<!-- #endregion -->


<!-- #region CSS -->
<style>
  .page-title-component {
    font-size: 2rem;
    color: #202020;
    margin: 1rem 2rem 1rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .add {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 0.75rem;
  }

  .add span {
    margin-left: 0.5rem;
    color: green;
  }
</style>
<!-- #endregion -->
