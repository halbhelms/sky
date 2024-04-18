<!-- #region SCRIPT -->
<script lang="ts">
  import SVGIcon from '$lib/components/ui/svg-icon.svelte'  
  export let name: string
  export let title: string
  export let width: string = '48'
  export let height: string = '48'
</script>
<!-- #endregion -->

<!-- #region HTML -->
<section class="user-label-component">  
  <SVGIcon iconName="person-circle" {width} {height} fill="black" />
  <div>
    <h4>{name}</h4>
    <h5>{title}</h5>
  </div>
</section>
<!-- #endregion -->

<!-- #region STYLE -->
<style>
  .user-label-component {
    display: grid;
    column-gap: 1rem;
    grid-template-columns: auto 1fr;
    column-gap: 1rem;
    align-items: center;
    padding-top: 2rem;
    padding-bottom: 1rem;
    margin-bottom: var(--margin-bottom-large);
    border-bottom: 1px solid silver;
    max-width: 100%;
    padding-left: 1rem;
  }
  
  h4 {
    font-weight: 300;
    margin-top: 0.25rem;
    font-size: 1.25rem;
  }
  
  h5 {
    font-weight: 600;
    font-size: 0.75rem;
    margin: 0;
  }
</style>
<!-- #endregion -->