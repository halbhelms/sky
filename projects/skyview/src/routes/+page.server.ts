import type { PageServerLoad } from './$types';

export const load = (async () => {
    return {
      title: 'Sales',
      tasks: [],
      stubImage: null
    };
}) satisfies PageServerLoad;