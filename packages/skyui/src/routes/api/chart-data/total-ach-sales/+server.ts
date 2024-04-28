export async function GET() {
  const data: Record<string, any> = {
    total_ach_sales: {
      group_name: "Top Producers",
      start_date: "2024-08-01",
      end_date: "2024-10-01",
      period: "weekly",
      total:310712,
      locations: [
        {id: 0, name: "All locations", periodic: [37493, 41626, 38710, 39986, 39245, 36587, 36044, 40021]},
        {id: 100, name: "Barrington Concrete Plant", periodic: [9718, 10145, 9028, 10054, 9956, 8997, 8454, 10066]},
        {id: 200, name: "Black Mountain Plant", periodic: [8823, 9652, 9452, 9422, 9121, 8693, 9123, 9852]},
        {id: 300, name: "Weston Concrete Products", periodic: [9954, 12653, 10785, 11126, 9958, 9902, 8994, 9889]},
        {id: 400, name: "Middle Rock Quarry", periodic: [8998, 9176, 9445, 9384, 10210, 8995, 10473, 10214]},
      ]
    }
  }
    
  return new Response(JSON.stringify(data), {
    headers: {
      'content-type': 'application/json',
    },
    status: 200
  });
}
