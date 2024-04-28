export async function GET() {
  const data: Record<string, any> = {
    total_transactions: {
      view_id: 100,
      view_name: "QTD",
      group_id: 100,
      group_name: "Top Producers",
      start_date: "2024-08-01",
      end_date: "2024-10-01",
      period: "weekly",
      total:1030,
      locations: [
        {id: 0, name: "All locations", periodic: [132, 131, 130, 126, 132, 128, 124, 127]},
        {id: 100, name: "Barrington Concrete Plant", periodic: [32, 31, 34, 32, 33, 29, 28, 31]},
        {id: 200, name: "Black Mountain Plant", periodic: [36, 35, 33, 33, 38, 37, 33, 31]},
        {id: 300, name: "Weston Concrete Products", periodic: [32, 31, 30, 30, 32, 29, 28, 32]},
        {id: 400, name: "Middle Rock Quarry", periodic: [32, 34, 33, 31, 29, 33, 35, 33]},
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
