import { BsFillStarFill } from 'react-icons/bs';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const WatchListButton = () => {
  return (
    <button>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <BsFillStarFill
              size={15}
              color="orange"
              className="hover:text-orange-500 transition-all"
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>Add to Watchlist</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </button>
  );
};

export default WatchListButton;
