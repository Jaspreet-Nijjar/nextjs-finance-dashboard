import { CiStar } from 'react-icons/ci';
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
            <CiStar
              size={15}
              className="hover:text-orange-500 transition-all cursor-pointer"
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
