import type { LayoutServerLoad } from './$types';
import { sidebarItems } from '$lib/config'

export const ssr=false;

export const load = (async () => {
    return {
      sidebarItems
    };
}) satisfies LayoutServerLoad;
