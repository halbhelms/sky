<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->

<!-- #region TS -->
<script lang="ts">
  import SvgIcon from "./svg-icon.svelte";

  export let title: string;
</script>

<!-- #endregion -->


<!-- #region HTML -->
<section class="page-title-component">
  <h1>{title}</h1>
</section>

<!-- #endregion -->


<!-- #region CSS -->
<style>
  .page-title-component {
    font-size: 2rem;
    color: var(--text-color, #202020);
    margin: 1rem 0 1rem 1rem;
    display: inline-block;
  }

  h1 {
    min-width: auto;
    padding: 1rem 0 1rem 0.5rem;
  }
</style>
