import Balance from '@/app/components/dashboard/Balance/Balance';
import Assets from '@/app/components/portfolio/Assets/Assets';
import PortfolioBarChart from '@/app/components/portfolio/BarChart/PortfolioBarChart';
import Transactions from '@/app/components/portfolio/Transactions/Transactions';
import Watchlist from '@/app/components/portfolio/Watchlist/Watchlist';

export const metadata = {
  title: 'Portfolio',
  description: 'Explore your personal portfolio',
};

const Portfolio = () => {
  return (
    <div className="flex flex-col p-4 mt-12 ml-[70px] md:ml-[250px]">
      <div className="flex flex-col lg:flex-row gap-6 mb-4">
        <Assets />
        <Watchlist />
      </div>

      <div className="flex flex-col lg:flex-row gap-6 mb-4">
        <Transactions />
        <PortfolioBarChart />
      </div>
    </div>
  );
};

export default Portfolio;
