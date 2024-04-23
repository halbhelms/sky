export async function GET() {
  const data = [
    {id: 100, name: 'All locations, This Month', description: 'General Overview of Sales', dateRange: 'last-7-days', groupId: 100},
    {id: 200, name: 'This Month', description: 'Quarterly Overview of Sales', dateRange: 'current-quarter', groupId: 300},
    {id: 100, name: 'General Overview', description: 'General Overview of Sales', dateRange: 'YTD', groupId: 400},
    
  ]   
  return new Response(JSON.stringify(data), {
    headers: {
      'content-type': 'application/json',
    },
    status: 200
  })
} 