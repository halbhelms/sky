import type { Group } from '$lib/types.d.ts';

export async function GET() {
  const data: Group[] =
    [
      {id: 100, name: 'Top Producers', locations: [100, 101, 102, 104, 107, 110]},
      {id: 200, name: 'North', locations: [100, 101, 102]},
      {id: 300, name: 'North East', locations: [104, 107, 110]},
      {id: 400, name: 'South', locations: [104, 107, 110]},
      {id: 500, name: 'East', locations: [104, 107, 100, 101, 102, 110]},
      {id: 600, name: 'West', locations: [104, 107, 103, 101, 102, 109]},
      {id: 700, name: 'Pennsylvania Plant', locations: [100]},
      {id: 800, name: 'Ohio', locations: [101, 107]},
      {id: 900, name: 'Texas-Oklahoma', locations: [102, 103, 109]},
      {id: 1000, name: 'East Rutherford Plant', locations: [102]},

    ]
        
    return new Response(JSON.stringify(data), {
      headers: {
        'content-type': 'application/json',
      },
      status: 200
    })
    }