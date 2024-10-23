'use client';

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

const Watchlist = () => {
  const watchlist = useWatchlistStore((state) => state.watchlist);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Watchlist</CardTitle>
        <CardDescription>
          <div>
            <p className="mb-2">
              These are the list of coins in your current watchlist you have
              added. You can find all coins below.
            </p>
            <Link
              href="/markets"
              className="border border-gray-300 rounded px-2 py-1 bg-black text-white hover:text-orange-500 transition-all"
            >
              View Coins
            </Link>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div>
          <ul>
            {watchlist.map((coin) => (
              <li
                key={coin.id}
                className="grid grid-cols-5 gap-10 items-center"
              >
                <div>
                  <div>
                    <p className="text-[14px] text-gray-600">Coin</p>
                  </div>

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
                  <p className="text-[14px] text-gray-600">Price</p>
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
                  <p className="text-[14px] text-gray-600">Market Cap</p>
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
                  <p className="text-[14px] text-gray-600">High 24hr</p>
                  <div className="flex items-center">
                    <p className="text-[13px]">
                      ${millify(coin.market_data.high_24h.usd)}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-[14px] text-gray-600">Low 24hr</p>
                  <div className="flex items-center">
                    <p className="text-[13px]">
                      ${millify(coin.market_data.low_24h.usd)}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default Watchlist;
