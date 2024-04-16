import type { PageServerLoad } from './$types';

export const load = (async () => {
    return {
      title: 'Members',
      tasks: [],
      stubImage: 'members'
    };
}) satisfies PageServerLoad;