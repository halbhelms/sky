import type { PageServerLoad } from './$types';

export const load = (async () => {
    return {
      title: 'Locations',
      tasks: [],
      stubImage: null
    };
}) satisfies PageServerLoad;