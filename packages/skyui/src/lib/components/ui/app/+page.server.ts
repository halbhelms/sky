import type { PageServerLoad } from './$types.js';

export const load = (async () => {
    return {
      title: 'App Specific UI Components' as string,
    };
}) satisfies PageServerLoad;