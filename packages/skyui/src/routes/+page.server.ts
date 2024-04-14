import type { PageServerLoad } from './$types';

export const load = (async () => {
    return {
      title: 'UI Components' as string,
    };
}) satisfies PageServerLoad;