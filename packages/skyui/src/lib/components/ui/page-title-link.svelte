<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->

<!-- #region TS -->
<script lang="ts">
  import SvgIcon from "./svg-icon.svelte";

  export let text: string;
</script>
<!-- #endregion -->


<!-- #region HTML -->
<section class="page-title-link-component">
  <h1>:: {text}</h1>
</section>
<!-- #endregion -->


<!-- #region CSS -->
<style>
  .page-title-link-component {
    font-size: 2rem;
    color: var(--text-color, #202020);
    margin: 1rem 2rem 1rem 0;
    display: inline-block;
  }

  h1 {
    min-width: auto;
    padding: 1rem 0.5rem 1rem 0.5rem;
    cursor: pointer;
  }
</style>
<!-- #endregion -->