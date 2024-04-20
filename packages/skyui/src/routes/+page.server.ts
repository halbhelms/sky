// import type { PageServerLoad } from './$types';

const rows = [
      { accountNo: 102, name: "ABC & Daughters Company", sales: 115000, payment: 'Credit' },
      { accountNo: 103, name: "DEFCON Ltd.", sales: 230000, payment: 'Debit' },
      { accountNo: 104, name: "Bennington Concrete Products", sales: 1460000, payment: 'Credit'},
      { accountNo: 105, name: "Davis Point", sales: 989552 , payment: 'Cash'},
      { accountNo: 106, name: "Silicon Basics", sales: 647250, payment: 'Credit'},
      { accountNo: 107, name: "Martin & Martin", sales: 702904, payment: 'Credit'},
    ];

  const columns = [
    { title: "Account No.", align: "left", type: "text" },
    { title: "Name", align: "left", type: "text" },
    { title: "Sales", align: "right", type: "currency" },
    { title: "Payment", align: "left", type: "text" },
  ];

export const load = (async ({ fetch }) => {
  let snapshots = {}

  const snapshotsData = await fetch('/api/sales')
  if (snapshotsData.ok) {
    snapshots = await snapshotsData.json()
  } 
  
  let groups = {}

  const groupsData = await fetch('/api/groups')
  if (groupsData.ok) {
    groups = await groupsData.json()
  } 
  
  let views = {}

  const viewsData = await fetch('/api/views')
  if (viewsData.ok) {
    views = await viewsData.json()
  } 
  
  return {
      rows,
      columns,
      snapshots,
      groups,
      views
    };
})