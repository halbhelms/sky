import type { PageServerLoad } from './$types';

export const load = (async () => {
    return {
      title: 'Base UI Components' as string,
    };
}) satisfies PageServerLoad;