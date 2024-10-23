import Indicators from '@/app/components/common/Indicators';
import WatchListButton from '@/app/components/common/WatchListButton';
import { Button } from '@/components/ui/button';
import { formatNumber } from '@/lib/utils';
import usePortfolioStore from '@/store/portfolioStore';
import { CoinInfoProps } from '@/types/markets';
import Image from 'next/image';
import Link from 'next/link';

const CoinInfo = ({ coin }: { coin: CoinInfoProps }) => {
  const addToPortfolio = usePortfolioStore((state) => state.addToPortfolio);

  const handleClick = () => {
    addToPortfolio(coin);
  };

  return (
    <section className="mb-8">
      <div className="flex items-center gap-2">
        <Image src={coin.image.large} alt={coin.name} width={50} height={100} />
        <h3 className="font-bold text-[22px]">{coin.name}</h3>
        <p className="uppercase text-xs text-gray-600">{coin.symbol}</p>
        <div className="bg-gray-300 w-8 text-center rounded-xl text-xs">
          #{coin.market_cap_rank}
        </div>
        <WatchListButton coin={coin} />
      </div>

      <div className="flex gap-2 mt-2">
        <h1 className="text-4xl font-semibold">
          ${formatNumber(coin.market_data.current_price.usd)}
        </h1>
        <Indicators
          data={coin.market_data.price_change_percentage_24h}
          fontSize="15px"
        />
      </div>

      <Button
        asChild
        variant="secondary"
        className="bg-black mt-4 text-white hover:text-orange-400 transition-all"
        onClick={handleClick}
      >
        <Link href={`/markets/${coin.id}/add`}>Add To Portfolio</Link>
      </Button>
    </section>
  );
};

export default CoinInfo;
