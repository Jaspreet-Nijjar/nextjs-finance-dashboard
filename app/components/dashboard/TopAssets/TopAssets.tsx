import { getCoinsMarketData } from '@/actions/markets';
import TopAssetsList from './TopAssetsList';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../../components/ui/card';
import { cn } from '@/lib/utils';

const TopAssets = async () => {
  const coinsData = await getCoinsMarketData();
  const coins = coinsData.slice(0, 3);

  return (
    <Card className={cn('w-full h-fit')}>
      <CardHeader>
        <CardTitle>Top Coins</CardTitle>
      </CardHeader>
      <CardContent>
        <TopAssetsList coins={coins} />
      </CardContent>
    </Card>
  );
};

export default TopAssets;
