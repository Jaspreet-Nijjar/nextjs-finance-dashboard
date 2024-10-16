'use client';
import { useState } from 'react';
import { BsFillStarFill } from 'react-icons/bs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const WatchListButton = () => {
  const [addToWatchList, setAddToWatchList] = useState(false);

  const handleClick = () => {
    setAddToWatchList(!addToWatchList);
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button onClick={handleClick}>
            <BsFillStarFill
              size={15}
              color={addToWatchList ? 'orange' : 'black'}
            />
          </button>
        </TooltipTrigger>

        <TooltipContent>
          <p>{addToWatchList ? 'Remove from Watchlist' : 'Add to Watchlist'}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default WatchListButton;
