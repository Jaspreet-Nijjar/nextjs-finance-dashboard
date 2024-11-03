import { formatNumber } from '@/lib/utils';
import { AssetsProps } from '@/types/markets';
import Image from 'next/image';

const TransactionsRow = ({ assets }: AssetsProps) => {
  const cost = assets.map((asset) => {
    return asset.amount * asset.market_data.current_price.usd;
  });

  return (
    <div className="text-[13px]">
      {assets.map((asset, index) => (
        <div
          className="grid grid-cols-4 lg:grid-cols-5 items-center mb-4 text-center"
          key={asset.id}
        >
          <div className="flex items-center gap-2">
            <Image
              src={asset.image.small}
              alt={asset.id}
              width={30}
              height={50}
            />
            <p>{asset.name}</p>
          </div>

          <p>{asset.amount}</p>
          <p>${formatNumber(cost[index])}</p>
          <p className="hidden lg:block">Completed</p>
          <p>{asset.date}</p>
        </div>
      ))}
    </div>
  );
};

export default TransactionsRow;
