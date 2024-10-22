import Watchlist from './components/Watchlist';

export const metadata = {
  title: 'Portfolio',
  description: 'Explore your personal portfolio',
};

const Portfolio = () => {
  return (
    <div className="flex flex-col p-4 mt-12 ml-[70px] md:ml-[250px]">
      <h1>Portfolio</h1>
      <Watchlist />
    </div>
  );
};

export default Portfolio;
