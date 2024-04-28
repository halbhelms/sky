import type { PageServerLoad } from './$types.ts';

export const load = (async ({ fetch, url }) => {
  const viewId = url.searchParams.get('viewId') || '9999'

  let apiString = '/api?viewId=9999&type=total-sales' 
  if (viewId !== '9999') {
    apiString = `/api/${url.search}`
  }
  console.log('apiString', apiString)
 
  const groupData = await fetch(`/api/groups/`)
    if (groupData.ok) {
      return await groupData.json()
    }
  
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
}) as PageServerLoad;