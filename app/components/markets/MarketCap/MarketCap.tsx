import { getGlobalData } from '@/actions/markets';
import { Card, CardContent, CardFooter } from '../../ui/card';
import { cn, formatNumber } from '@/lib/utils';
import Indicators from '../../common/Indicators';

const MarketCap = async () => {
  const { totalMarketCap, marketCapChange } = await getGlobalData();
  const marketCap = totalMarketCap.usd;

  return (
    <Card className={cn('w-full py-2.5 lg:w-fit')}>
      <CardContent className={cn('py-6')}>
        <h1 className="text-xl font-bold text-left">
          ${formatNumber(marketCap)}
        </h1>
      </CardContent>
      <CardFooter className={cn('px-6')}>
        <p className="text-gray-500 text-[15px] mt-[-25px] flex justify-between items-center">
          Market Capitalisation
          <span>
            <Indicators data={marketCapChange} />
          </span>
        </p>
      </CardFooter>
    </Card>
  );
};

export default MarketCap;
