import { WatchListCoinsProps } from '@/types/markets';
import WatchlistItem from './WatchlistItem';

const WatchlistList = ({
  watchlist,
  handleClick,
}: {
  watchlist: WatchListCoinsProps[];
  handleClick: (id: string) => void;
}) => {
  return (
    <ul>
      {watchlist.map((coin) => (
        <WatchlistItem coin={coin} key={coin.id} handleClick={handleClick} />
      ))}
    </ul>
  );
};

export default WatchlistList;
