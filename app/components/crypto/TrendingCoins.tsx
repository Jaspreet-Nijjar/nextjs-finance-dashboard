import { getTrendingCoins } from '@/actions/crypto';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const TrendingCoins = async () => {
  const trendingCoinsData = await getTrendingCoins();
  const trendingCoins = trendingCoinsData.coins.slice(0, 3);
  console.log(trendingCoins);

  return (
    <Card className={cn('w-fit')}>
      <CardHeader>
        <CardTitle className="text-center">Trending Coins</CardTitle>
        <CardDescription>
          These are the top 3 trending coins in the last 24 hours
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col">
          <div className="flex justify-between text-orange-500 text-sm font-semibold border-b border-gray-300 pb-2 mb-2">
            <span>Coin</span>
            <span>Price</span>
          </div>

          {trendingCoins.map((coin: any) => {
            const { id, name, symbol, price_btc, thumb } = coin.item;

            return (
              <div
                key={id}
                className="flex justify-between items-center py-2 text-sm"
              >
                <div className="flex items-center">
                  <Image src={thumb} alt={name} width={20} height={20} />
                  <span className="ml-2">
                    {name} ({symbol})
                  </span>
                </div>
                <span>{price_btc}</span>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default TrendingCoins;
