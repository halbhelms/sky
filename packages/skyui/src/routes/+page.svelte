<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->

<script lang="ts">
  import Drawer from '$lib/components/ui/drawer.svelte';
  import ContextMenu from '$lib/components/ui/context-menu.svelte';
  // import Checkbox from '$lib/components/ui/checkbox.svelte';
  import Checkbox from '$lib/components/ui/checkbox-fancy.svelte';
  import Radio from '$lib/components/ui/radio-fancy.svelte';
  import Button from '$lib/components/ui/button.svelte';
  import UserLabel from '$lib/components/ui/user-label.svelte';
  import Slide from '$lib/components/ui/slide.svelte';
  import PageTitle from '$lib/components/ui/page-title.svelte';
  import PageTitleLink from '$lib/components/ui/page-title-link.svelte';
  import DrawerToggler from '$lib/components/ui/drawer-toggler.svelte';
  // import Table from '$lib/components/ui/table.svelte';
  import Accordion from '$lib/components/ui/accordion.svelte';
  import Filter from '$lib/components/ui/filter.svelte';
  import InfoCard from '$lib/components/ui/info-card.svelte';
  import Groups from '$lib/components/ui/groups.svelte';
  import DateRange from '$lib/components/ui/date-range.svelte';
  import Views from '$lib/components/ui/views.svelte';
  import Waiting from '$lib/components/ui/waiting.svelte';
  import LineChart from '$lib/components/ui/linear-chart.svelte';
  import { goto, invalidate } from '$app/navigation';

  export let data: any
  
  const { rows, snapshots, groups, views } = data;
  const { 
    total_sales_now, 
    total_sales_then, 
    total_transactions_now, 
    total_transactions_then, 
    total_net_sales_now, 
    total_net_sales_then, 
    total_cash_sales_now, 
    total_cash_sales_then, 
    total_skyfi_ach_sales_now, 
    total_skyfi_ach_sales_then, 
    total_credit_sales_now, 
    total_credit_sales_then, 
    total_fees_now, 
    total_fees_then, 
    total_taxes_now, 
    total_taxes_then
  } = snapshots;

  let dateRange: string = 'dtd';
  let groupsSelected: number = 0;
  let viewId = 300

  let drawerOpen: boolean = false;

  function edit(rowId: number) {
    console.log('edit ' + rowId);
  }

  function archive(rowId: number) {
    console.log('archive ' + rowId);
  }

  const actions = [
    {label: 'Edit', fnc: edit, icon: 'plus-circle'},
    {label: 'Archive', fnc: archive, icon: 'pencil'}
  ];

  function radioAction(name: string, value: string) {
    console.log(name, value);
  }

  function openDrawer() {
    drawerOpen = true;
  }

  function closeDrawer() {
    drawerOpen = false;
  }

  async function drilldown(val: string) {
    await goto(`?${val}`);
    await invalidate(url => {
      if (url.searchParams.has('viewId') ) {
        return true
      }
      if (url.searchParams.has('groupId')) {
        return true
      }
      return false
    })
  }
</script>
<div  on:click={() => drilldown('viewId=200&type=total-cash-sales')}>Click me</div>

<div  on:click={() => drilldown('groupId=500&dateRange=ytd&type=ach-sales')}>Click me</div>
<Drawer isOpen={drawerOpen} {closeDrawer}>
  <Accordion title="Date Range">
    <DateRange />
  </Accordion>
  <Accordion title="Groups">
    <Groups {groups} />
  </Accordion>
  <div class="apply-button">
    <Button text="Apply" action={() => console.log('button')} />
  </div>
  <Accordion title="Views">
    <Views {views} />
  </Accordion>
</Drawer>
<LineChart />
<PageTitle title="Sales" />
<PageTitleLink text={views[0].name}/>
<DrawerToggler {openDrawer} {closeDrawer} />
<div class="info-cards">
  <InfoCard title="Total Sales" numberNow = {total_sales_now} numberThen = {total_sales_then} currency={true} comparedTo="last year" />
  <InfoCard title="Total Cash Sales" numberNow = {total_cash_sales_now} numberThen = {total_cash_sales_then} currency={true} comparedTo="last year"/>
  <InfoCard title="Total Net Sales" numberNow = {total_net_sales_now} numberThen = {total_net_sales_then} currency={true} comparedTo="last year"/>
  <InfoCard title="Total Transactions" numberNow = {total_transactions_now} numberThen = {total_transactions_then} currency={false} comparedTo="last year"/>
  <InfoCard title="Total SkyFi ACH Sales" numberNow = {total_skyfi_ach_sales_now} numberThen = {total_skyfi_ach_sales_then} currency={true} comparedTo="last year"/>
  <InfoCard title="Total Credit Sales" numberNow = {total_credit_sales_now} numberThen = {total_credit_sales_then} currency={true} comparedTo="last year"/>
  <InfoCard title="Total Fees" numberNow = {total_fees_now} numberThen = {total_fees_then} currency={true} comparedTo="last year"/>
  <InfoCard title="Total Taxes" numberNow = {total_taxes_now} numberThen = {total_taxes_then} currency={true} comparedTo="last year"/>
</div>

<section class="chart">

</section>
  <h1 class="page-title">Sales Data</h1>
<Filter label="Filter data" actionOn={openDrawer} actionOff={closeDrawer} />
<table>
  <thead>
    <tr>
      <th>Act. No</th>
      <th>Name</th>
      <th class="number">Sales</th>
    </tr>
  </thead>
  <tbody>
    {#each rows as row}
      <tr>
        <td>{row.accountNo}</td>
        <td>{row.name}</td>
        <td class="number">${row.sales.toLocaleString()}</td>
      </tr>
    {/each}
  </tbody>
</table>


<!-- <section>
  <h1 class="page-title">{title}</h1>
</section> -->



<style>
  .info-cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    margin: 0.5rem 1rem 1rem 1rem;
  }

  .apply-button {
    display: flex;
    justify-content: center;
  }

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
</style>
<!-- #endregion -->
