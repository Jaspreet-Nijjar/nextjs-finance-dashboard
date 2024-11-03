import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Indicators from '../../common/Indicators';
import { formatNumber } from '@/lib/utils';
import millify from 'millify';
import { WatchListCoinsProps } from '@/types/markets';

const WatchlistItem = ({
  coin,
  handleClick,
}: {
  coin: WatchListCoinsProps;
  handleClick: (id: string) => void;
}) => {
  return (
    <div>
      <li
        key={coin.id}
        className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-6 xl:gap-8 mb-6 items-center"
      >
        <div>
          <div className="flex items-center gap-2">
            <Image
              src={coin.image.large}
              alt={coin.name}
              width={30}
              height={100}
              className="hidden lg:block"
            />
            <Link
              href={`/markets/${coin.id}`}
              className="text-[13px] hover:text-orange-400 transition-all"
            >
              {coin.name}
              <p className="hidden lg:block text-[12px] text-gray-600 uppercase">
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
            <Indicators data={coin.market_data.price_change_percentage_24h} />
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
          <div className="hidden md:block">
            <p className="text-[13px]">
              ${millify(coin.market_data.high_24h.usd)}
            </p>
          </div>
        </div>

        <div>
          <div className="hidden xl:block">
            <p className="text-[13px]">
              ${millify(coin.market_data.low_24h.usd)}
            </p>
          </div>
        </div>
        <button
          onClick={() => handleClick(coin.id)}
          className="hidden xl:block text-gray-500 text-[13px] hover:text-orange-400 hover:font-bold transition-all"
        >
          Remove
        </button>
      </li>
    </div>
  );
};

export default WatchlistItem;
