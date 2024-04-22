type Group = {
  id: number;
  name: string;
  locations: number[];
}

export async function GET() {
  const data: Group[] =
    [
      {id: 100, name: 'Top Producers', locations: [100, 200, 400, 600, 800, 900]},
      {id: 200, name: 'North', locations: [100, 800, 1000]},
      {id: 300, name: 'North East', locations: [200, 600, 900]},
      {id: 400, name: 'South', locations: [100, 500, 800]},
      {id: 500, name: 'East', locations: [400, 500, 900, 1000, 1100, 1200]},
      {id: 600, name: 'West', locations: [200, 600, 700, 900, 1000]},
      {id: 700, name: 'Pennsylvania Plant', locations: [100]},
      {id: 800, name: 'Ohio', locations: [300, 400]},
      {id: 900, name: 'Texas-Oklahoma', locations: [500, 900, 1000]},
      {id: 1000, name: 'East Rutherford Plant', locations: [200]},

    ]
        
    return new Response(JSON.stringify(data), {
      headers: {
        'content-type': 'application/json',
      },
      status: 200
    })
    }