import Image from 'next/image';
import { Card, CardContent } from '../../../../components/ui/card';
import { cn, formatNumber } from '@/lib/utils';
import Indicators from '@/app/components/common/Indicators';
import millify from 'millify';
import { PopularCoinProps } from '@/types/markets';
import Link from 'next/link';

const PopularCoinCard = ({ coin }: { coin: PopularCoinProps }) => {
  return (
    <Card className={cn('w-[240px] p-2')}>
      <CardContent>
        <div>
          <div className="flex justify-between">
            <Image src={coin.image} alt={coin.id} width={40} height={50} />
          </div>

          <Link
            href={`/markets/${coin.id}`}
            className="text-[14px] text-gray-600"
          >
            {coin.name}
          </Link>

          <div className="flex items-center">
            <p className="text-[14px]">${formatNumber(coin.current_price)}</p>
            <Indicators data={coin.price_change_percentage_24h} />
          </div>

          <div className="flex items-center">
            <p className="text-xs text-gray-600">
              Market Cap: ${millify(coin.market_cap)}
            </p>
            <Indicators data={coin.market_cap_change_percentage_24h} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PopularCoinCard;
