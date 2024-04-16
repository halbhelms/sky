type SidebarItem = {
  label: string;
  link: string;
  icon: string;
}

export const sidebarItems: SidebarItem[] = [
  {label: 'Sales', link: '/', icon: 'graph-up'},
  {label: 'Transactions', link: '/transactions', icon: 'credit-card'},
  {label: 'Groups', link: '/groups', icon: 'globe-americas'},
  {label: 'Members', link: '/members', icon: 'people'},
]