// import type { PageServerLoad } from './$types';

  const columns = [
    { title: "Name", align: "left", type: "text", rowName: 'name' },
    { title: "Email", align: "left", type: "text", rowName: 'email' },
    { title: "Status", align: "left", type: "text", rowName: 'status' },
  ];

export const load = (async ({ fetch }) => {
  let rows = []
  const membersData = await fetch('/api/members')
  if (membersData.ok) {
    rows = await membersData.json()
  } 
    return {
      columns,
      rows
    };
})