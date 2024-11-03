import { formatNumber } from '@/lib/utils';
import { AssetsProps } from '@/types/markets';
import millify from 'millify';
import Image from 'next/image';

const AssetsRow = ({ assets }: AssetsProps) => {
  return (
    <div className="text-[13px]">
      {assets.map((asset) => (
        <div
          className="grid grid-cols-4 items-center lg:grid-cols-5 gap-6 mb-4"
          key={asset.id}
        >
          <div className="flex items-center gap-2">
            <Image
              src={asset.image.large}
              alt={asset.id}
              width={25}
              height={30}
            />
            <p className="text-center">{asset.name}</p>
          </div>

          <p className="hidden lg:block uppercase text-center">
            {asset.symbol}
          </p>
          <p className="text-center">{asset.amount}</p>
          <p>
            ${formatNumber(asset.amount * asset.market_data.current_price.usd)}
          </p>
          <p className="text-center">
            ${millify(asset.market_data?.market_cap?.usd ?? 0)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AssetsRow;
