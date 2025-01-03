import { getGlobalData } from '@/actions/markets';
import { Card, CardContent, CardFooter } from '../../ui/card';
import { cn, formatNumber } from '@/lib/utils';

const TradingVolume = async () => {
  const { totalVolume } = await getGlobalData();
  const tradingVolume = totalVolume.usd;

  return (
    <Card className={cn('w-full py-2.5 lg:w-full')}>
      <CardContent className={cn('py-6')}>
        <h1 className="text-xl font-bold text-left">
          ${formatNumber(tradingVolume)}
        </h1>
      </CardContent>
      <CardFooter className={cn('px-6')}>
        <p className="text-gray-500 text-[15px] mt-[-25px]">
          24hr Trading Volume
        </p>
      </CardFooter>
    </Card>
  );
};

export default TradingVolume;
