import { formatNumber } from '@/lib/utils';
import { AssetsProps } from '@/types/markets';

const TransactionsRow = ({ assets }: AssetsProps) => {
  const cost = assets.map((asset) => {
    return asset.amount * asset.market_data.current_price.usd;
  });

  return (
    <div className="text-[13px]">
      {assets.map((asset, index) => (
        <div className="grid grid-cols-5 mb-4 text-center">
          <p>{asset.name}</p>
          <p>{asset.amount}</p>
          <p>${formatNumber(cost[index])}</p>
          <p className="text-green-600">Completed</p>
          <p>{asset.date}</p>
        </div>
      ))}
    </div>
  );
};

export default TransactionsRow;
