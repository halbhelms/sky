<!-- #region SCRIPT -->
<script lang="ts">
  import { SVGIcon } from '@sky/skyui'  
  export let name: string
  export let title: string
</script>
<!-- #endregion -->

<!-- #region HTML -->
<section class="user-label-component">  
  <SVGIcon iconName="profile-circle" width="36" height="36" fill="black" />
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
    grid-template-columns: 1.25rem 1fr;
    column-gap: 1rem;
    align-items: center;
    padding-top: 2rem;
    padding-bottom: 1rem;
    margin-bottom: var(--margin-bottom-large);
    font-size: 1.5rem;
    border-bottom: 1px solid silver;
    max-width: 100%;
    padding-left: 1rem;
  }
  
  
  h5 {
    padding-left: 1rem;
    
    font-weight: 300;
    margin-top: 0.25rem;
    font-size: calc(var(--font-size-small) * 0.75)
  }
  
  h4 {
    padding-left: 1rem;
    font-weight: 600;
    font-size: 1.25rem;
    margin: 0;
  }
</style>
<!-- #endregion -->