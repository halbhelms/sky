<script lang="ts">
  import PageTitle from '$lib/components/ui/page-title.svelte';
  import Pagination from '$lib/components/ui/pagination.svelte';

  type Transaction = {
    id: number;
    date: string;
    location: string;
    type: string;
    gross: number;
  };

  export let data: any
  const { transactions } = data;

    function formatDate(inputDate: string) {
  // Using destructuring to extract year, month, and day from the date string
  const [year, month, day] = inputDate.split('-');

  // Returning the date in the desired format 'MM.DD.YYYY'
  return `${month}.${day}.${year}`;
}
</script>

<PageTitle title="Transactions" />  
<table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Date</th>
      <th>Location</th>
      <th>Type</th>
      <th class='number'>Gross</th>
    </tr>
  </thead>
  <tbody>
    {#each transactions as transaction}
      {@const date = formatDate(transaction.date)}
      <tr>
        <td>{transaction.id}</td>
        <td>{date}</td>
        <td>{transaction.location}</td>
        <td>{transaction.type}</td>
        <td class="number">${transaction.gross.toLocaleString()}</td>
      </tr>
    {/each}
  </tbody>
</table>
<div class="pagination">
  <Pagination pageQty={2} />
</div>


<style>
  table {
    width: calc(100% - 2rem);
    border-collapse: collapse;
    margin: 0 1rem 0 1rem;
  }

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  .number {
    text-align: right;
    padding-right: 1rem;
  }

  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 1.5rem;
    padding-right: 1.5rem;
    padding-top: 0.75rem;
    font-weight: 600;
  }
</style>