// function to take a large number such as 4500000 and convert it to a human readable format such as 4.5M
export const formatLargeNumber = (num: number) => {
  if (num < 1000) return num
  if (num < 1000000) return (num / 1000).toFixed(1) + 'K'
  return (num / 1000000).toFixed(1) + 'M'
}