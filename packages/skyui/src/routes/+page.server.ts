// import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
  let snapshots = {}
  const snapshotsData = await fetch('/api/snapshots')
  if (snapshotsData.ok) {
    snapshots = await snapshotsData.json()
  } 
  
  let rows = {}
  const rowsData = await fetch('/api/sales')
  if (rowsData.ok) {
    rows = await rowsData.json()
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
      snapshots,
      groups,
      views
    };
})