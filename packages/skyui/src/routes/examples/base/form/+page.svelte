<!-- #region JS -->
<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
  const { title } = data;
</script>
<!-- #endregion -->

<!-- #region HTML -->
<section>
  <h1 class="page-title">{title}</h1>
</section>
<!-- #endregion -->

<!-- #region CSS -->
<style>
  .page-title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
</style>
