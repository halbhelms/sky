// import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
  let transactions = []
  const transactionsData = await fetch('/api/transactions')
  if (transactionsData.ok) {
    transactions = await transactionsData.json()
  } 
    return {
      transactions
    };
})