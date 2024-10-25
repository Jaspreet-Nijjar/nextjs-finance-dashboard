import TopAssets from '../components/dashboard/TopAssets';
import Watchlist from '@/app/components/portfolio/Watchlist/Watchlist';

export default function Home() {
  return (
    <main className="flex flex-col p-4 mb-12 mt-12 ml-[70px] md:ml-[250px]">
      <section>
        <Watchlist />
        <TopAssets />
      </section>
    </main>
  );
}
