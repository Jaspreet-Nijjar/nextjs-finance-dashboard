'use client';
import { useState } from 'react';
import useWatchlistStore from '@/store/watchlistStore';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';
import { formatNumber } from '@/lib/utils';
import Link from 'next/link';
import Indicators from '@/app/components/common/Indicators';
import millify from 'millify';
import { WATCHLIST_HEADERS } from '@/constants';

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
    <Card>
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
            <p className="text-[14px]  text-gray-600 mb-4 max-w-md mt-[-20px]">
              You currently do not have any coins added to your watchlist. View
              all coins below.
            </p>
          )}

          {hasCoinsInWatchlist && (
            <div className="grid grid-cols-6 gap-10 items-center">
              {WATCHLIST_HEADERS.map((header) => (
                <p className="text-[14px]  text-gray-600 mb-2 font-bold">
                  {header}
                </p>
              ))}
            </div>
          )}

          <ul>
            {watchlist.map((coin) => (
              <li
                key={coin.id}
                className="grid grid-cols-6 gap-10 mb-6 items-center"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <Image
                      src={coin.image.large}
                      alt={coin.name}
                      width={30}
                      height={100}
                    />
                    <Link
                      href={`/markets/${coin.id}`}
                      className="text-[13px] hover:text-orange-400 transition-all"
                    >
                      {coin.name}
                      <p className="text-[12px] text-gray-600 uppercase">
                        {coin.symbol}
                      </p>
                    </Link>
                  </div>
                </div>

                <div>
                  <div className="flex items-center">
                    <p className="text-[13px]">
                      ${formatNumber(coin.market_data.current_price.usd)}
                    </p>
                    <Indicators
                      data={coin.market_data.price_change_percentage_24h}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center">
                    <p className="text-[13px]">
                      ${millify(coin.market_data.market_cap.usd)}
                    </p>
                    <Indicators
                      data={coin.market_data.market_cap_change_percentage_24h}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center">
                    <p className="text-[13px]">
                      ${millify(coin.market_data.high_24h.usd)}
                    </p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center">
                    <p className="text-[13px]">
                      ${millify(coin.market_data.low_24h.usd)}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => removeFromWatchlist(coin.id)}
                  className="text-gray-500 text-[13px] hover:text-orange-400 hover:font-bold transition-all"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <Link
            href="/markets"
            className="border border-gray-300 rounded px-2 py-0.5 text-sm bg-black text-white hover:text-orange-500 transition-all"
          >
            View Coins
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default Watchlist;
