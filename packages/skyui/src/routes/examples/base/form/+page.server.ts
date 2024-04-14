import type { PageServerLoad } from './$types';

export const load = (async () => {
    return {
      title: 'Base::Form UI Elements' as string,
    };
}) satisfies PageServerLoad;