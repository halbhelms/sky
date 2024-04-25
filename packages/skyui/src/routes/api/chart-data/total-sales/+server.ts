export async function GET() {
  const data: Record<string, any> = {
    total_sales: {
      view_id: 100,
      view_name: "QTD",
      group_id: 100,
      group_name: "Top Producers",
      start_date: "2024-08-01",
      end_date: "2024-10-01",
      period: "weekly",
      total:1005092,
      locations: [
        {id: 100, name: "Barrington Concrete Plant", total: 179559, periodic: [24702, 15619, 17228, 19065, 24108, 29469, 22611, 26757]},
        {id: 200, name: "Black Mountain Plant", total: 143754, periodic: [18058, 16211, 16980, 18202, 17554, 19610, 17893, 19246]},
        {id: 300, name: "Weston Concrete Products", total: 405068, periodic: [52505, 49881, 51086, 50604, 51363, 47895, 50088, 51646]},
        {id: 400, name: "Middle Rock Quarry", total: 276711, periodic: [35500, 36482, 32562, 31848, 33912, 35026, 36782, 34599]},
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
