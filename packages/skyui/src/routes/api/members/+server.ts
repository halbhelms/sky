export async function GET() {
  const data = [
    {id: 100, name: 'Jim Brewer', status: 'active', email: 'jb@mass-prod.com'},
    {id: 100, name: 'Alice Brewer', status: 'suspended', email: 'ab@mass-prod.com'},
    {id: 100, name: 'Teddy Bridgewater', status: 'invited', email: 'tbridgewater@analytics-now.com'},
    {id: 100, name: 'Rick Moranis', status: 'active', email: 'rick_m@mass-prod.com'},
    {id: 100, name: 'Davis Chairton', status: 'active', email: 'davis_chair@mass-prod.com'},
    
  ]   
  return new Response(JSON.stringify(data), {
    headers: {
      'content-type': 'application/json',
    },
    status: 200
  })
} 