import type { PageServerLoad } from './$types.js';

export const load = (async () => {
    return {
      title: 'Base::Form Components' as string,
    };
}) satisfies PageServerLoad;