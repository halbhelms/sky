<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<script lang="ts">
  export let pageQty = 2;

  let pageArray: number[] = [];
  for (let i = 0; i < pageQty; i++) {
    pageArray.push(i);
  }
  let activeId = 0;

  function setActive(num: number) {
    activeId = num;
  }
</script>

<div class="pagination">
  {#each pageArray as num}

    <div
      class="page-number"
      class:active={activeId === num}
      on:click={() => setActive(num)}
      id={String(num)}
    >
      {num + 1}
    </div>
  {/each}
</div>

<style>
  .pagination {
    display: flex;
    justify-content: end;
    align-items: center;
    column-gap: 1.5rem;
    padding-right: 1.5rem;
    padding-top: 0.75rem;
    font-weight: 600;
  }

  .page-number {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 0.875rem;
    border: 2px solid var(--sky-color);
    color: var(--text-color-dark);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease-in-out;
  }

  .page-number:hover {
    background-color: var(--sky-color);
    color: var(--text-color-light, white);
  }

  .active {
    font-weight: 600;
    color: var(--text-color-light, white);
    background-color: var(--sky-color);
    transform: scale(1.1);
  }
</style>
