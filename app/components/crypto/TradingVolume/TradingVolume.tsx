import { getGlobalData } from '@/actions/crypto';
import { Card, CardContent, CardFooter } from '../../ui/card';
import { cn, formatNumber } from '@/lib/utils';

const TradingVolume = async () => {
  const { totalVolume } = await getGlobalData();
  const tradingVolume = totalVolume.usd;

  return (
    <Card className={cn('w-full')}>
      <CardContent className={cn('p-2')}>
        <h1 className="text-xl font-bold text-left">
          ${formatNumber(tradingVolume)}
        </h1>
      </CardContent>
      <CardFooter className={cn('px-2')}>
        <p className="text-gray-500 text-[15px]">24hr Trading Volume</p>
      </CardFooter>
    </Card>
  );
};

export default TradingVolume;
