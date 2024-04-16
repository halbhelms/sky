import type { PageServerLoad } from './$types';

export const load = (async () => {
    return {
      member: {
        id: 0,
        name: 'John Doe',
      }
    };
}) satisfies PageServerLoad;