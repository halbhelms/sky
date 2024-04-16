import type { LayoutServerLoad } from './$types';
import { sidebarItems } from '$lib/config'

export const ssr=false;
export async function load({ fetch }) {
  let groups, views
  
  const groupsData = await fetch('api/groups')
  if (groupsData.ok) {
    groups = await groupsData.json()
  } 
  
  const viewsData = await fetch('api/views')
  if (viewsData.ok) {
    views = await viewsData.json()
  } 

  let userInfo = {
    name: 'Jack Davis',
    title: 'Analyst'
  } 
    
  return {
      groups,
      views,
      sidebarItems,
      userInfo
  } satisfies LayoutServerLoad
}
