import MarketCap from '@/app/components/crypto/MarketCap/MarketCap';
import TradingVolume from '@/app/components/crypto/TradingVolume/TradingVolume';
import TrendingCoins from '@/app/components/crypto/TrendingCoins/TrendingCoins';

const Crypto = () => {
  return (
    <main className="flex flex-col gap-6 items-center md:flex-row">
      <section className="flex flex-col gap-4">
        <MarketCap />
        <TradingVolume />
      </section>

      <section>
        <TrendingCoins />
      </section>
    </main>
  );
};

export default Crypto;
