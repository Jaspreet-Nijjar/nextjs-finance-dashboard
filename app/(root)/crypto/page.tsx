import MarketCap from '@/app/components/crypto/MarketCap/MarketCap';
import TradingVolume from '@/app/components/crypto/TradingVolume/TradingVolume';
import TrendingCoins from '@/app/components/crypto/TrendingCoins/TrendingCoins';

const Crypto = () => {
  return (
    <main className="flex gap-6">
      <section className="flex flex-col gap-6">
        <MarketCap />
        <TradingVolume />
      </section>

      <TrendingCoins />
    </main>
  );
};

export default Crypto;
