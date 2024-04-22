export async function GET() {
  const data = [
    {id: 100, name:'Bryce Pass'},
    {id: 200, name:'Davis Park'},
    {id: 300, name:'Elysius Fields'},
    {id: 400, name:'Marshall Point'},
    {id: 500, name:'Parker Ridge'},
    {id: 600, name:'Avalon Ridge'},
    {id: 700, name:'Cameron Pass'},
    {id: 800, name:'Dawson Point'},
    {id: 900, name:'Garrison Fields'},
    {id: 1000, name:'Jasper Square'},
    {id: 1100, name:'Kingsley Ridge'},
    {id: 1200, name:'Landon Pass'},
  ]   
  return new Response(JSON.stringify(data), {
    headers: {
      'content-type': 'application/json',
    },
    status: 200
  })
} 