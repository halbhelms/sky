import type { PageServerLoad } from './$types';

export const load = (async () => {
    return {
      title: 'Experimental UI Components' as string,
    };
}) satisfies PageServerLoad;