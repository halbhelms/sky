import type { PageServerLoad } from './$types';

export const load = (async () => {
    return {
      title: 'UI Component Examples' as string,
    };
}) satisfies PageServerLoad;