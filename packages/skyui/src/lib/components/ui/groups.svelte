<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->

<!-- #region: TS -->
<script lang="ts">
  import type { Group } from '$lib/types/group.ts';
  export let groups: Group[]
</script>
<!-- #endregion -->


<!-- #region: HTML -->
<section class="groups">
  {#each groups as group}
    <div>
      <input type="checkbox" name={group.id} value={group.id} id={`id-${group.id}`}>
      <label for={`id-${group.id}`} class="title">{group.name}</label>
    </div>
  {/each}
</section>
<!-- #endregion -->


<!-- #region: CSS -->
<style>
  section {
    display: grid;
    row-gap: 0.75rem;
    font-size: 0.75rem;
    grid-auto-rows: 1rem;
    padding: 1rem;
    background-color: #E6EAEC;
    color: #202020;
  }

  label {
    cursor: pointer;
  }

  .title {
    font-size: 0.75rem;
    font-weight: 400;
    margin-left: 0.75rem;
  }

  input[type="checkbox"] {
    width: 1rem;
    height: 1rem;
  }
</style>
<!-- #endregion -->