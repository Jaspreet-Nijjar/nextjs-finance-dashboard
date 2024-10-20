import { PopularCoinProps } from '@/types/markets';
import PopularCoinCard from './PopularCoinCard';

const PopularCoins = ({ coins }: { coins: PopularCoinProps[] }) => {
  return (
    <div>
      <h1 className="text-xl text-gray-600 mb-2 mt-2 border-b border-gray-300">
        Popular Coins
      </h1>
      <div className="max-sm:flex max-sm:justify-center flex flex-wrap gap-2">
        {coins.map((coin) => (
          <PopularCoinCard key={coin.id} coin={coin} />
        ))}
      </div>
    </div>
  );
};

export default PopularCoins;
