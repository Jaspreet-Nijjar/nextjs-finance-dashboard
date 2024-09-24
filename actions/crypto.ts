export async function getTrendingCoins() {
  const res = await fetch('https://api.coingecko.com/api/v3/search/trending');

  return res.json();
}

export async function getGlobalData() {
  const res = await fetch('https://api.coingecko.com/api/v3/global');
  const data = await res.json();
  return {
    totalVolume: data.data.total_volume,
    totalMarketCap: data.data.total_market_cap,
    marketCapChange: data.data.market_cap_change_percentage_24h_usd,
  };
}
