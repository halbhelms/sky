export async function GET() {
  const data: Record<string, any> = {
    total_fees: {
      view_id: 100,
      view_name: "QTD",
      group_id: 100,
      group_name: "Top Producers",
      start_date: "2024-08-01",
      end_date: "2024-10-01",
      period: "weekly",
      total:10753,
      locations: [
        {id: 0, name: "All locations", periodic: [1319, 1342, 1354, 1253, 1343, 1446, 1395, 1301]},
        {id: 100, name: "Barrington Concrete Plant", periodic: [350, 328, 411, 209, 265, 381, 322, 305]},
        {id: 200, name: "Black Mountain Plant", periodic: [365, 391, 309, 334, 326, 374, 368, 302]},
        {id: 300, name: "Weston Concrete Products", periodic: [254, 297, 322, 305, 341, 305, 310, 295]},
        {id: 400, name: "Middle Rock Quarry", periodic: [350, 326, 312, 405, 411, 386, 395, 399]},
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
