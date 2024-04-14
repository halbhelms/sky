
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->

<!-- #region JS -->
<script lang="ts">
  export let title: string = `Page Title`;
  export let add: boolean = false;
  export let action: any;
  export let textColor: string = '#202020';

</script>
<!-- #endregion -->


<!-- #region HTML -->
<section class="page-title-component" style="color:{textColor}">
  <h1>{title}</h1>
  <div class="icon" class:show={add} on:click={action}>
    <svg class="bi" width="32" height="32" fill="gold">
      <use xlink:href="/node_modules/bootstrap-icons/bootstrap-icons.svg#heart-fill"/>
    </svg>
     Add region
  </div>
  
</section>
<!-- #endregion -->


<!-- #region CSS -->
<style>
  .page-title-component {
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1rem 2rem 1rem 2rem;
  }

  .icon {
    font-style: normal;
    font-size: 0.75rem;
    margin-left: 0.5rem;
    display: none;
    /* display: none; */
  } 

  .show {
    display: flex;
    gap: 0.5rem;
    cursor: pointer;
  }

  h1 {
    font-size: 1.5rem;
    color: var (--text-color-primary);
  }
</style>
<!-- #endregion -->