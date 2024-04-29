import type { PageServerLoad } from './$types.ts';

export const load = (async ({ fetch, url }) => {
  // set up the apiString
  const viewId = url.searchParams.get('viewId') || '9999'

  let apiString = '?viewId=9999' 
  if (viewId !== '9999') {
    apiString = `/api/${url.search}`
  }
  console.log('apiString', apiString)

  // fetch the data for all snapshots
  let snapshots = {}
  const snapshotsData = await fetch(`/api/snapshots${apiString}`)
  if (snapshotsData.ok) {
    snapshots = await snapshotsData.json()
  } 
  
  // fetch the data for the table rows
  let rows = {}
  const rowsData = await fetch(`/api/sales${apiString}`)
  if (rowsData.ok) {
    rows = await rowsData.json()
  } 
  
  // fetch the data for groups for drawer
  let groups = {}
  const groupsData = await fetch('/api/groups')
  if (groupsData.ok) {
    groups = await groupsData.json()
  } 
  
  // fetch the data for views for drawer
  let views = {}
  const viewsData = await fetch('/api/views')
  if (viewsData.ok) {
    views = await viewsData.json()
  } 
  
  return {
    snapshots,
    rows,
    groups,
    views
  };
}) as PageServerLoad;