export async function GET() {
  const data = [
    {id: 100, name: 'General Overview', description: 'General Overview of Sales'},
    {id: 200, name: 'Monthly Overview', description: 'Monthly Overview of Sales'},
    {id: 300, name: 'Quarterly Overview', description: 'Quarterly Overview of Sales'}
  ]   
  return new Response(JSON.stringify(data), {
    headers: {
      'content-type': 'application/json',
    },
    status: 200
  })
} 