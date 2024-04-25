export async function GET() {
  const data = [
      { accountNo: 102, name: "ABC & Daughters Company", sales: 115000, payment: 'Credit' },
      { accountNo: 103, name: "DEFCON Ltd.", sales: 230000, payment: 'Debit' },
      { accountNo: 104, name: "Bennington Concrete Products", sales: 1460000, payment: 'Credit'},
      { accountNo: 105, name: "Davis Point", sales: 989552 , payment: 'Cash'},
      { accountNo: 106, name: "Silicon Basics", sales: 647250, payment: 'Credit'},
      { accountNo: 107, name: "Martin & Martin", sales: 702904, payment: 'Credit'},
    ];  
    return new Response(JSON.stringify(data), {
      headers: {
        'content-type': 'application/json',
      },
      status: 200
    })
    }