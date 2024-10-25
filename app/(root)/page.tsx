import Watchlist from '@/app/components/portfolio/Watchlist/Watchlist';
import TopAssets from '../components/dashboard/TopAssets/TopAssets';
import Balance from '../components/dashboard/Balance/Balance';

export default function Home() {
  return (
    <main className="flex flex-col p-4 mb-12 mt-12 ml-[70px] md:ml-[250px]">
      <section>
        <Balance />
        <Watchlist />
        <TopAssets />
      </section>
    </main>
  );
}
