import MarketCap from '@/app/components/crypto/MarketCap/MarketCap';
import TradingVolume from '@/app/components/crypto/TradingVolume/TradingVolume';
import TrendingCoins from '@/app/components/crypto/TrendingCoins/TrendingCoins';

const Crypto = () => {
  return (
    <main className="flex">
      <section className="flex flex-col">
        <MarketCap />
        <TradingVolume />
      </section>

      <TrendingCoins />
    </main>
  );
};

export default Crypto;
