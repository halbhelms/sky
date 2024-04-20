export async function GET() {
  const data = [
    {id: 100, date: '2024-02-03', location: 'Bryce Pass', type: 'Credit Card', gross: 1574.58},
    {id: 200, date: '2024-02-05', location: 'Uncanny Valley', type: 'Debit Card', gross: 882.19},
    {id: 300, date: '2024-02-06', location: 'Zion', type: 'Credit Card', gross: 1024.89},
    {id: 400, date: '2024-02-08', location: 'Bryce Pass', type: 'Credit Card', gross: 1206.12},
    {id: 500, date: '2024-02-10', location: 'Bryce Pass', type: 'Credit Card', gross: 1882.19},
    {id: 600, date: '2024-02-12', location: 'Uncanny Valley', type: 'ACH', gross: 453.08},
    {id: 700, date: '2024-02-13', location: 'Uncanny Valley', type: 'Debit Card', gross: 127.97},
    {id: 800, date: '2024-02-14', location: 'Uncanny Valley', type: 'Credit Card', gross: 654.93},
    {id: 900, date: '2024-02-15', location: 'Zion', type: 'Credit Card', gross: 1182.00},
    {id: 1000, date: '2024-02-18', location: 'Bryce Pass', type: 'ACH', gross: 1602.00},
    {id: 1100, date: '2024-02-19', location: 'Davis Park', type: 'ACH', gross: 1453.88},
    {id: 1200, date: '2024-02-22', location: 'Zion', type: 'Credit Card', gross: 902.74},
    {id: 1300, date: '2024-02-23', location: 'Uncanny Valley', type: 'Debit Card', gross: 894.36},
    {id: 1400, date: '2024-02-24', location: 'Davis Park', type: 'Debit Card', gross: 660.82},
    {id: 1500, date: '2024-02-27', location: 'Zion', type: 'Credit Card', gross: 1074.55},
    {id: 1600, date: '2024-02-27', location: 'Zion', type: 'Credit Card', gross: 802.11},
    {id: 1700, date: '2024-02-28', location: 'Uncanny Valley', type: 'Credit Card', gross: 984.64},
    
    
  ]   
  return new Response(JSON.stringify(data), {
    headers: {
      'content-type': 'application/json',
    },
    status: 200
  })
} 