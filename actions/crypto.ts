export async function getTrendingCoins() {
  const res = await fetch('https://api.coingecko.com/api/v3/search/trending');

  return res.json();
}
