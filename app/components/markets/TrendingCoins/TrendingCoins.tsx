import { getTrendingCoins } from '@/actions/crypto';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../ui/card';
import { cn } from '@/lib/utils';
import TrendingCoinsList from './TrendingCoinsList';

const TrendingCoins = async () => {
  const trendingCoinsData = await getTrendingCoins();
  const trendingCoins = trendingCoinsData.coins.slice(0, 3);

  return (
    <Card className={cn('w-[90%] lg:w-fit')}>
      <CardHeader>
        <CardTitle className="text-center">Trending Coins</CardTitle>
        <CardDescription>
          These are the top 3 trending coins in the last 24 hours
        </CardDescription>
      </CardHeader>
      <CardContent>
        <TrendingCoinsList coins={trendingCoins} />
      </CardContent>
    </Card>
  );
};

export default TrendingCoins;
