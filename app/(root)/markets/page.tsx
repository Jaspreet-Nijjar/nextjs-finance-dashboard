import CoinMarketTable from '@/app/components/markets/CoinMarketTable/CoinMarketTable';
import MarketCap from '@/app/components/markets/MarketCap/MarketCap';
import TradingVolume from '@/app/components/markets/TradingVolume/TradingVolume';
import TrendingCategories from '@/app/components/markets/TrendingCategories/TrendingCategories';
import TrendingCoins from '@/app/components/markets/TrendingCoins/TrendingCoins';

export const metadata = {
  title: 'Markets',
  description: 'Explore financial market data',
};

const Markets = () => {
  return (
    <>
      <main className="flex flex-col p-4 mt-12 ml-[70px] md:ml-[250px]">
        <h1 className="font-semibold text-sm md:text-2xl text-gray-900">
          Current Cryptocurrency Market Prices
        </h1>
        <p className="text-sm text-gray-600 md:text-left md:text-[14px]">
          Discover all global cryptocurrencies available, ranked and highlighted
          by market capitalisation, price changes and key financial data. Stay
          updated with the latest trends, performance insights and explore each
          coin to get further financial insight. Explore real-time prices, track
          your favourite assets by adding coins to your watchlist.
        </p>

        <section className="flex flex-col items-center lg:flex-row gap-6 p-6 w-full">
          <div className="flex flex-col gap-6 md:flex-row lg:flex-col lg:justify-between  items-center">
            <MarketCap />
            <TradingVolume />
          </div>

          <TrendingCoins />
          <TrendingCategories />
        </section>

        <CoinMarketTable />
      </main>
    </>
  );
};

export default Markets;
