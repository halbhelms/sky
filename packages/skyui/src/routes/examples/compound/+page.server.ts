import type { PageServerLoad } from './$types';


export const load = (async () => {
    return {
      title: 'Compound UI Components'
    };
}) satisfies PageServerLoad;