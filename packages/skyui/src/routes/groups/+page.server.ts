// import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
  let groups = []
  const groupsData = await fetch('/api/groups')
  if (groupsData.ok) {
    groups = await groupsData.json()
  } 
    return {
      groups
    };
})