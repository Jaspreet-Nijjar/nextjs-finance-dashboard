import TrendingCoinItem from './TrendingCoinItem';

const TrendingCoinsList = ({ coins }: any) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between text-orange-500 text-sm font-semibold border-b border-gray-300 pb-2 mb-2">
        <span>Coin</span>
        <span>Price</span>
      </div>

      {coins.map((coin: any) => (
        <TrendingCoinItem key={coin.item.id} coin={coin} />
      ))}
    </div>
  );
};

export default TrendingCoinsList;
