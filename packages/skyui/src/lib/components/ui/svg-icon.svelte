<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->

<!-- #region TS -->
<script lang="ts">
  export let iconName: string
  export let width: string = '32'
  export let height: string = '32'
  export let fill: string = '#202020'
</script>
<!-- #endregion -->


<!-- #region HTML -->
<section class="svg-icon-component">
<svg class="bi" width={width} height={height} fill={fill}>
  <use xlink:href="/node_modules/bootstrap-icons/bootstrap-icons.svg#{iconName}"/>
</svg>
</section>
<!-- #endregion -->


<!-- #region CSS -->
<style>
</style>
<!-- #endregion -->