// import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
  let groups = []
  const groupsData = await fetch('/api/groups')
  if (groupsData.ok) {
    groups = await groupsData.json()
  } 

  let locations = []
  const locationsData = await fetch('/api/locations')
  if (locationsData.ok) {
    locations = await locationsData.json()
  } 

  return {
      groups,
      locations
    };
})