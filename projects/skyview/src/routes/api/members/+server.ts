export async function GET() {
  const data = [
    {id: 100, name: 'James Clareton'},
    {id: 200, name: 'Alicia Davis'},
    {id: 300, name: 'Eduardo Gonzales'},
    {id: 400, name: 'Tyrone Johnson'},
    {id: 500, name: 'Linda Martinez'},
  ]   
  return new Response(JSON.stringify(data), {
    headers: {
      'content-type': 'application/json',
    },
    status: 200
  })
} 