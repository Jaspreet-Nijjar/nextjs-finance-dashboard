import { CoinProps } from '@/types/markets';
import { formatNumber } from '@/lib/utils';
import Link from 'next/link';
import Indicators from '../../common/Indicators';
import millify from 'millify';

const CoinRow = ({ coin }: { coin: CoinProps }) => {
  return (
    <section
      className="text-xs grid grid-cols-3 md:grid-cols-5 lg:grid-cols-11 items-center p-4 border-b border-gray-200"
      key={coin.id}
    >
      <div className="text-center">{coin.market_cap_rank}</div>

      <div className="flex items-center justify-center">
        <img src={coin.image} alt="image of coin" width={30} className="mr-2" />
        <Link href={`/markets/${coin.id}`}>
          <div className="hover:text-orange-500 transition ease-in 500">
            {coin.name} ({coin.symbol.toUpperCase()})
          </div>
        </Link>
      </div>

      <div className="text-center">${formatNumber(coin.current_price)}</div>

      <div className="hidden md:block">
        <Indicators
          data={coin.price_change_percentage_1h_in_currency}
          fontSize="text-xs"
        />
      </div>

      <div className="hidden lg:block">
        <Indicators
          data={coin.price_change_percentage_24h}
          fontSize="text-xs"
        />
      </div>

      <div className="hidden lg:block">
        <Indicators
          data={coin.price_change_percentage_7d_in_currency}
          fontSize="text-xs"
        />
      </div>

      <div className="hidden md:block text-center">
        ${millify(coin.market_cap)}
      </div>

      <div className="col-span-2">
        <div className="hidden xl:flex justify-around text-xs">
          <p>${millify(coin.circulating_supply)}</p>
          <p>${millify(coin.total_supply)}</p>
        </div>
        <div className="hidden xl:block">
          <div className="relative w-28 h-2 bg-gray-200 rounded mx-auto">
            <div
              className="absolute left-0 top-0 h-full bg-orange-300 rounded"
              style={{
                width: `${(
                  (coin.circulating_supply / coin.total_supply) *
                  100
                ).toFixed(2)}%`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoinRow;
