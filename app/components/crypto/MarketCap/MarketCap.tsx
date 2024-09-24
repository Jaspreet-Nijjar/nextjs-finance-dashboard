import { getGlobalData } from '@/actions/crypto';
import { Card, CardContent, CardFooter } from '../../ui/card';
import { cn, formatNumber } from '@/lib/utils';

const MarketCap = async () => {
  const { totalMarketCap } = await getGlobalData();
  const marketCap = totalMarketCap.usd;

  return (
    <Card className={cn('w-fit')}>
      <CardContent className={cn('py-6')}>
        <h1 className="text-xl font-bold text-left">
          ${formatNumber(marketCap)}
        </h1>
      </CardContent>
      <CardFooter className={cn('px-6')}>
        <p className="text-gray-500 text-[15px] mt-[-25px]">
          Market Capitalisation
        </p>
      </CardFooter>
    </Card>
  );
};

export default MarketCap;
