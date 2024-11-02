'use client';
import useWatchlistStore from '@/store/watchlistStore';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';
import { cn } from '@/lib/utils';
import Link from 'next/link';

import WatchlistHeaders from './WatchlistHeaders';
import WatchlistList from './WatchlistList';

const Watchlist = () => {
  const watchlist = useWatchlistStore((state) => state.watchlist);
  const removeFromWatchlist = useWatchlistStore(
    (state) => state.removeFromWatchlist
  );

  const handleClick = (coinId: string) => {
    removeFromWatchlist(coinId);
  };

  const hasCoinsInWatchlist = watchlist.length > 0;

  return (
    <Card className={cn('w-full h-fit')}>
      <CardHeader>
        <CardTitle>Watchlist</CardTitle>
        <CardDescription>
          {hasCoinsInWatchlist && (
            <p className="mb-2">
              View the list of coins in your current watchlist. You can find all
              coins below.
            </p>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div>
          {!hasCoinsInWatchlist && (
            <p className="text-[14px] text-gray-600 mb-4 mt-[-20px]">
              You currently do not have any coins added to your watchlist.
            </p>
          )}

          {hasCoinsInWatchlist && <WatchlistHeaders />}

          <WatchlistList watchlist={watchlist} handleClick={handleClick} />

          <Link
            href="/markets"
            className="border border-gray-300 rounded px-2 py-0.5 text-sm bg-black text-white hover:text-orange-500 transition-all"
          >
            View All Coins
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default Watchlist;
