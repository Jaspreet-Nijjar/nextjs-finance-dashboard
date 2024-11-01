'use client';
import { useEffect, useState } from 'react';
import { BsFillStarFill } from 'react-icons/bs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import useWatchlistStore from '@/store/watchlistStore';
import { Coin } from '@/store/watchlistStore';

const WatchListButton = ({ coin }: { coin: Coin }) => {
  const watchlist = useWatchlistStore((state) => state.watchlist);
  const addToWatchlist = useWatchlistStore((state) => state.addToWatchlist);
  const removeFromWatchlist = useWatchlistStore(
    (state) => state.removeFromWatchlist
  );

  const coinInWatchlist = coin && watchlist.some((item) => item.id === coin.id);
  const [isInWatchlist, setIsInWatchlist] = useState(coinInWatchlist);

  useEffect(() => {
    if (coin) {
      setIsInWatchlist(watchlist.some((item) => item.id === coin.id));
    }
  }, [coin, watchlist]);

  if (!coin || !coin.id) {
    return null;
  }

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
