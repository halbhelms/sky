<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->

<!-- #region JS -->
<script lang="ts">
  export let iconName: string
  export let width: string = '32'
  export let height: string = '32'
  export let fill: string = '#202020'

  // const xlink
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
  .svg-icon-component {

  }
</style>
<!-- #endregion -->