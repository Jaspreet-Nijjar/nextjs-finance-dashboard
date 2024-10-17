import Indicators from '@/app/components/common/Indicators';
import Image from 'next/image';

const CoinInfo = ({ coin, marketData }) => {
  return (
    <section>
      <div className="flex items-center gap-2">
        <Image src={coin.image.large} alt={coin.name} width={40} height={100} />
        <h3 className="font-bold text-[18px]">{coin.name}</h3>
        <p className="uppercase text-xs text-gray-600">{coin.symbol}</p>
        <div className="bg-gray-300 w-8 text-center rounded-xl text-xs">
          #{coin.market_cap_rank}
        </div>
        <Indicators data={marketData.price_change_percentage_24h} />
      </div>
    </section>
  );
};

export default CoinInfo;
