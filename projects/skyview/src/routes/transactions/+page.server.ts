import type { PageServerLoad } from './$types';

export const load = (async () => {
    return {
      title: 'Transactions',
      tasks: [],
      stubImage: 'transactions'
    };
}) satisfies PageServerLoad;