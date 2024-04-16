<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->

<!-- #region JS -->
<script lang="ts">
  export let text: string
  export let fontWeight: string = '600';
  export let fontSize: string = '1.5rem';
  export let color: string = 'inherit';
  export let margin: string = '1rem 1rem 1rem 1rem';
  export let textAlign: string = 'center';
  export let width: string = '100%';

  $: style = `
    font-weight: ${fontWeight};
    font-size: ${fontSize};
    color: ${color};
    margin: ${margin};
    text-align: ${textAlign};
    width: ${width};
  `;
</script>
<!-- #endregion -->


<!-- #region HTML -->
<section class="heading-component" {style}>
  <h1>{text}</h1>
</section>
<!-- #endregion -->


<!-- #region CSS -->

<!-- #endregion -->