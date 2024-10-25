import Assets from '@/app/components/portfolio/Assets/Assets';
import Watchlist from '@/app/components/portfolio/Watchlist/Watchlist';

export const metadata = {
  title: 'Portfolio',
  description: 'Explore your personal portfolio',
};

const Portfolio = () => {
  return (
    <div className="flex flex-col p-4 mt-12 ml-[70px] md:ml-[250px]">
      <Watchlist />
      <Assets />
    </div>
  );
};

export default Portfolio;
