<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->

<!-- #region: TS -->
<script lang="ts">
  export let text: string = `Button`;
</script>
<!-- #endregion -->


<!-- #region: HTML -->
<button class="button-component">
  {text}
</button>
<!-- #endregion -->


<!-- #region: CSS -->
<style>
  
</style>