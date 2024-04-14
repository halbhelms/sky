import type { PageServerLoad } from './$types.js';

export const load = (async () => {
    return {title: 'Elemental UI Components' as string,};
}) satisfies PageServerLoad;