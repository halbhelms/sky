import type { PageServerLoad } from './$types';

export const load = (async () => {
  let snapshots = {}

  const snapshotsData = await fetch('/api/sales')
  if (snapshotsData.ok) {
    snapshots = await snapshotsData.json()
  } 
    return {
      title: 'Sales',
      tasks: [],
      stubImage: null
    };
}) satisfies PageServerLoad;