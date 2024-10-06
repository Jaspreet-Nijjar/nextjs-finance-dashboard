import MarketCap from '@/app/components/crypto/MarketCap/MarketCap';
import TradingVolume from '@/app/components/crypto/TradingVolume/TradingVolume';
import TrendingCoins from '@/app/components/crypto/TrendingCoins/TrendingCoins';

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
