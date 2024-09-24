export async function getTrendingCoins() {
  const res = await fetch('https://api.coingecko.com/api/v3/search/trending');

  return res.json();
}

export async function getTradingVolume() {
  const res = await fetch('https://api.coingecko.com/api/v3/global');
  const data = await res.json();
  return data.data.total_volume;
}
