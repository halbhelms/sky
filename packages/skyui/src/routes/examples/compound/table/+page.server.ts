import type { PageServerLoad } from './$types';

export const load = (async () => {
    return {
      title: 'Compound::Table Components' as string,
    };
}) satisfies PageServerLoad;