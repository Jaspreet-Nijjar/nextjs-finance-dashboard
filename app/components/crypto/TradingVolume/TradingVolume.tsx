import { getTradingVolume } from '@/actions/crypto';
import { Card, CardContent, CardFooter } from '../../ui/card';
import { cn } from '@/lib/utils';

const TradingVolume = async () => {
  const tradingVolumeData = await getTradingVolume();
  const tradingVolume = tradingVolumeData.usd;

  return (
    <Card className={cn('w-fit')}>
      <CardContent>
        <h1 className="text-xl font-bold text-left">${tradingVolume}</h1>
      </CardContent>
      <CardFooter>
        <p className="text-gray-500 text-[15px]">24hr Trading Volume</p>
      </CardFooter>
    </Card>
  );
};

export default TradingVolume;
