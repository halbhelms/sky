export async function GET() {
  const data: Record<string, any> = {
    total_cash_sales: {
      view_id: 100,
      view_name: "QTD",
      group_id: 100,
      group_name: "Top Producers",
      start_date: "2024-08-01",
      end_date: "2024-10-01",
      period: "weekly",
      total:334205,
      locations: [
        {id: 100, name: "Barrington Concrete Plant", total: 60345, periodic: [8106, 5532, 5841, 6258, 8028, 9924, 7854, 8802]},
        {id: 200, name: "Black Mountain Plant", total: 47850, periodic: [5994, 5354, 5644, 6005, 5954, 6802, 5854, 6243]},
        {id: 300, name: "Weston Concrete Products", total: 133961, periodic: [17011, 16542, 17021, 16404, 16998, 15826, 16728, 17431]},
        {id: 400, name: "Middle Rock Quarry", total: 92049, periodic: [11801, 12368, 10824, 10248, 11368, 11887, 12347, 11206]},
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
