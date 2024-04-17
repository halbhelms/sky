<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->

<!-- #region TS -->
<script lang="ts">
  export let title: string
</script>
<!-- #endregion -->


<!-- #region HTML -->
<section class="filename-component">
  <h1>{title}</h1>
</section>
<!-- #endregion -->


<!-- #region CSS -->
<style>

  h1 {
    color: hsl(225,96%,64%);
    text-align: center;
    margin: 1.25rem 0 0.5rem 0;
  }
</style>
<!-- #endregion -->