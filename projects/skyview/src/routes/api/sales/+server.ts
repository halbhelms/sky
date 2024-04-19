export async function GET() {
  const data =
    {
      total_sales_now: 1400124,
      total_sales_then: 1025654,
      total_transactions_now: 1027,
      total_transactions_then: 969,
      total_net_sales_now: 725658,
      total_net_sales_then: 525654, 
      total_cash_sales_now: 414458,
      total_cash_sales_then: 402036,
      total_skyfi_ach_sales_now: 311200,
      total_skyfi_ach_sales_then: 123618,
      total_credit_sales_now: 675466,
      total_credit_sales_then: 500000,
      total_fees_now: 11254,
      total_fees_then: 13564,
      total_taxes_now: 17754,
      total_taxes_then: 15654
    }    
    return new Response(JSON.stringify(data), {
      headers: {
        'content-type': 'application/json',
      },
      status: 200
    })
    }