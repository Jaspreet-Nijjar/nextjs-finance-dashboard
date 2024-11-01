import Watchlist from '@/app/components/portfolio/Watchlist/Watchlist';
import TopAssets from '../components/dashboard/TopAssets/TopAssets';
import Balance from '../components/dashboard/Balance/Balance';
import TrendingCoins from '../components/markets/TrendingCoins/TrendingCoins';

export default function Home() {
  return (
    // <main className="flex flex-col p-4 mb-12 mt-12 ml-[70px] md:ml-[250px]">
    //   <section>
    //     <Balance />
    //     <Watchlist />
    //     <TopAssets />
    //     <TrendingCoins />
    //   </section>
    // </main>

    <main className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 mb-12 mt-12 ml-[70px] md:ml-[250px]">
      <div className="grid gap-2">
        <Balance />
        <Watchlist />
        <TopAssets />
      </div>

      <div>
        <TrendingCoins />
      </div>
    </main>
  );
}
