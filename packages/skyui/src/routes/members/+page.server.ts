// import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
  let rows = []
  const membersData = await fetch('/api/members')
  if (membersData.ok) {
    rows = await membersData.json()
  } 
    return {
      rows
    };
})