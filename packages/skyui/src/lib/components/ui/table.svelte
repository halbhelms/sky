<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->

<!-- #region: TS -->
<script lang="ts">
  import type { TableColumn } from '$lib/types/table-column.ts'
  import type { ContextMenuAction } from '$lib/types/context-menu-action.ts'
  
  import ContextMenu from './context-menu.svelte';
  // interface Row {
  //   [key: string]: string | number
  // }
  export let rows: Record<string, any>[]
  export let columns: any
  export let actions: ContextMenuAction[] | null = null
  export let zebraStriping: boolean = true
  let rowNames = columns.map( (column: Record<string, any>) => column.rowName)
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
        <th style="text-align:{column.align};">{column.title}</th>
      {/each}
      {#if actions}
        <th>Actions</th>
      {/if}
    </tr>
  </thead>



    <!-- {@const trAlign = columns[i].align} -->
    <!-- <tr style="text-align: {trAlign}"> -->
      {#each rows as row}
      <!-- {@const tdAlign = columns[j].align} -->
      <!-- {@const tdType = columns[j].type} -->
      <tr>
      {#each rowNames as rowName}
        <td>{row[rowName].toLocaleString()}</td>
      {/each}
      {#if actions}
        <td style="text-align: center">
          <ContextMenu {actions} id={i} />
        </td>
      {/if}
    </tr>
    {/each}
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