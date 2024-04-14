import type { PageServerLoad } from './$types';

export const load = (async () => {
    return {
      title: 'App UI Components' as string,
    };
}) satisfies PageServerLoad;