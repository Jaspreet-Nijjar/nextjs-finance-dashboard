import TopAssets from '../components/dashboard/TopAssets';
import Watchlist from './portfolio/components/Watchlist';

export default function Home() {
  return (
    <div className="flex flex-col p-4 mt-12 ml-[70px] md:ml-[250px]">
      <Watchlist />
      <TopAssets />
    </div>
  );
}
