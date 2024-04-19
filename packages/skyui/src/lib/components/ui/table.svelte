<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->

<!-- #region: TS -->
<script lang="ts">
  import type { TableColumn } from '$lib/types/table-column.ts'
  import type { ContextMenuAction } from '$lib/types/context-menu-action.ts'
  
  import ContextMenu from './context-menu.svelte';

  export let rows: Array<Object>
  export let columns: TableColumn[]
  export let actions: ContextMenuAction[] = []
  export let zebraStriping: boolean = true
  
  function edit(rowId: string) {
    console.log('edit ' + rowId)
  }

  function archive(rowId: string) {
    console.log('archive ' + rowId)
  }
</script>
<!-- #endregion -->


<!-- #region: HTML -->
<table>
  <thead>
    <tr>
      {#each columns as column}
        <th style="text-align: align={column.align};">{column.title}</th>
      {/each}
      {#if actions}
        <th>Actions</th>
      {/if}
    </tr>
  </thead>
  <tbody>
    {#each rows as row, i}
    <!-- {@const trAlign = columns[i].align} -->
    <!-- <tr style="text-align: {trAlign}"> -->
    <tr>
      {#each Object.entries(row) as [key, value], j}
        {@const tdAlign = columns[j].align}
        {@const tdType = columns[j].type}
        <td style="text-align: {tdAlign};" class={tdType}>{value.toLocaleString()}</td>
      {/each}
      {#if actions}
        <td style="text-align: center">
          <ContextMenu {actions} id={i} />
        </td>
      {/if}
    </tr>
    {/each}
  </tbody>
</table>
<!-- #endregion -->


<!-- #region: CSS -->
<style>
  table {
    border-collapse: collapse;
    margin: 1rem 1rem 1rem 1rem;
    width: calc(100% - 2rem);
  }

  th {
    border: 1px solid grey;
    font-weight: 600;
    font-size: 1.25rem;
    padding: 16px 20px 16px 20px;
  }

  td {
    border: 1px solid grey;
    padding: 16px 20px 16px 20px;
  }

  .action {
    cursor: pointer;
    margin: 0 0.25rem;
  }

  .action:hover {
  color: var(--sky-color);
  text-shadow: 1px 0 0 var(--sky-color),
               -1px 0 0 var(--sky-color),
               0 1px 0 var(--sky-color),
               0 -1px 0 var(--sky-color);
}

  .currency::before {
    content: '$ ';
  }

  .odd {
    background-color: hsl(218, 85%, 92%);
  }
</style>
<!-- #endregion -->