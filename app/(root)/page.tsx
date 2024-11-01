import Watchlist from '@/app/components/portfolio/Watchlist/Watchlist';
import TopAssets from '../components/dashboard/TopAssets/TopAssets';
import Balance from '../components/dashboard/Balance/Balance';
import TrendingCoins from '../components/markets/TrendingCoins/TrendingCoins';
import TrendingCategories from '../components/markets/TrendingCategories/TrendingCategories';

export default function Home() {
  return (
    <main className="p-4 mb-12 mt-12 ml-[80px] md:ml-[250px]">
      <div className="flex flex-col gap-2 lg:flex-row">
        <div className="flex flex-col gap-4">
          <Balance />
          <Balance />
        </div>

        <div className="flex flex-col gap-2">
          <Watchlist />

          <div className="flex flex-col lg:flex gap-2">
            <div className="flex flex-col lg:flex-row gap-2">
              <TrendingCoins />
              <TrendingCategories />
            </div>

            <TopAssets />
          </div>
        </div>
      </div>
    </main>
  );
}
