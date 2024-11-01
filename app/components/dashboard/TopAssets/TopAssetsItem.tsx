import Image from 'next/image';
import { Card, CardContent } from '../../../components/ui/card';
import Link from 'next/link';
import { cn, formatNumber } from '@/lib/utils';
import millify from 'millify';
import Indicators from '../../common/Indicators';
import { CoinProps } from '@/types/markets';

const TopAssetsItem = ({ coin }: { coin: CoinProps }) => {
  return (
    <Card className={cn('w-full p-2 mb-4')}>
      <CardContent>
        <div>
          <div className="flex items-center gap-2 mt-4">
            <Image src={coin.image} alt={coin.id} width={30} height={30} />
            <div>
              <div className="flex items-center gap-1">
                <Link
                  href={`/markets/${coin.id}`}
                  className="flex items-center gap-1 text-[15px] text-gray-600  hover:text-orange-500 transition-all"
                >
                  {coin.name}
                </Link>
                <div className="bg-gray-300 w-6 text-center rounded-xl text-xs">
                  #{coin.market_cap_rank}
                </div>
              </div>

              <p className="uppercase text-[12px] text-gray-600">
                {coin.symbol}
              </p>
            </div>
          </div>

          <div className="mt-4 flex items-center mb-2">
            <p className="text-[13px] text-gray-600">
              Price: ${formatNumber(coin.current_price)}
            </p>
            <Indicators data={coin.price_change_percentage_24h} />
          </div>

          <div className="flex items-center">
            <p className="text-[13px] text-gray-600">
              Market Cap: ${millify(coin.market_cap)}
            </p>
            <Indicators data={coin.market_cap_change_percentage_24h} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TopAssetsItem;
