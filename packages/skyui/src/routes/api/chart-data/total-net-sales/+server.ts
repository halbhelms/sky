export async function GET() {
  const data: Record<string, any> = {
    total_taxes: {
      view_id: 100,
      view_name: "QTD",
      group_id: 100,
      group_name: "Top Producers",
      start_date: "2024-08-01",
      end_date: "2024-10-01",
      period: "weekly",
      total:18060,
      locations: [
        {id: 100, name: "Barrington Concrete Plant", total: 4525, periodic: [575, 556, 532, 511, 602, 611, 556, 582]},
        {id: 200, name: "Black Mountain Plant", total: 4619, periodic: [544, 586, 571, 560, 555, 601, 622, 580]},
        {id: 300, name: "Weston Concrete Products", total: 4900, periodic: [605, 622, 630, 608, 597, 613, 614, 611]},
        {id: 400, name: "Middle Rock Quarry", total: 4016, periodic: [550, 532, 508, 499, 502, 446, 467, 512]},
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
