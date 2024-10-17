import Indicators from '@/app/components/common/Indicators';
import { formatNumber } from '@/lib/utils';
import Image from 'next/image';

const CoinInfo = ({ coin }) => {
  return (
    <section>
      <div className="flex items-center gap-2">
        <Image src={coin.image} alt={coin.name} width={40} height={100} />
        <h3 className="font-bold text-[18px]">{coin.name}</h3>
        <p className="uppercase text-xs text-gray-600">{coin.symbol}</p>
        <div className="bg-gray-300 w-8 text-center rounded-xl text-xs">
          #{coin.market_cap_rank}
        </div>
      </div>

      <div className="flex gap-2 mt-2">
        <h1 className="text-3xl font-semibold">
          ${formatNumber(coin.current_price)}
        </h1>
        <Indicators data={coin.price_change_percentage_24h} />
      </div>
    </section>
  );
};

export default CoinInfo;
