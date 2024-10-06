import MarketCap from '@/app/components/markets/MarketCap/MarketCap';
import TradingVolume from '@/app/components/markets/TradingVolume/TradingVolume';
import TrendingCoins from '@/app/components/markets/TrendingCoins/TrendingCoins';

const Markets = () => {
  return (
    <>
      <main className="flex flex-col items-center md:flex-row gap-6 p-6 mt-12">
        <section className="flex flex-col gap-6 md:justify-around">
          <MarketCap />
          <TradingVolume />
        </section>

        <TrendingCoins />
      </main>
    </>
  );
};

export default Markets;
