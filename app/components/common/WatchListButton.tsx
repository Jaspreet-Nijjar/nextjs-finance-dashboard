'use client';
import { useState } from 'react';
import { BsFillStarFill } from 'react-icons/bs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import useWatchlistStore from '@/store/watchlistStore';

const WatchListButton = ({ coin }: any) => {
  const watchlist = useWatchlistStore((state) => state.watchlist);
  const addToWatchlist = useWatchlistStore((state) => state.addToWatchlist);
  const removeFromWatchlist = useWatchlistStore(
    (state) => state.removeFromWatchlist
  );

  if (!coin || !coin.id) {
    return null;
  }

  const coinInWatchlist = watchlist.some((item) => item.id === coin.id);

  const [isInWatchlist, setIsInWatchlist] = useState(coinInWatchlist);

  const handleClick = () => {
    if (isInWatchlist) {
      removeFromWatchlist(coin.id);
    } else {
      addToWatchlist(coin);
    }
    setIsInWatchlist(!isInWatchlist);
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button onClick={handleClick}>
            <BsFillStarFill
              size={15}
              color={isInWatchlist ? 'orange' : 'black'}
            />
          </button>
        </TooltipTrigger>

        <TooltipContent>
          <p>{isInWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist'}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default WatchListButton;
