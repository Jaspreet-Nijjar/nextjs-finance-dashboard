export async function getTrendingData() {
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
    activeCrypto: data.data.active_cryptocurrencies,
    markets: data.data.markets,
    marketCapBTC: data.data.market_cap_percentage.btc,
    marketCapETH: data.data.market_cap_percentage.eth,
  };
}

export async function getCoinsMarketData(
  page: number = 1,
  perPage: number = 20
) {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${perPage}&page=${page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d&locale=en`
  );
  return res.json();
}

export async function getSingleCoin(coinId: string) {
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`);
  return await res.json();
}
