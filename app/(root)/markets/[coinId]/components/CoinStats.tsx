import { CoinStatsProps } from '@/types/markets';
import CoinStatsCard from './CoinStatsCard';
import { formatNumber } from '@/lib/utils';

const CoinStats = ({ coin }: { coin: CoinStatsProps }) => {
  return (
    <section className="flex flex-col">
      <div className="flex gap-2">
        <CoinStatsCard
          title="Market Cap"
          data={coin.market_data.market_cap.usd}
          currency={true}
        />
        <CoinStatsCard
          title="Total Volume"
          data={coin.market_data.total_volume.usd}
          currency={true}
        />
      </div>

      <div className="flex gap-2 mt-2 mb-2">
        <CoinStatsCard
          title="Fully Diluted Validation"
          data={coin.market_data.fully_diluted_valuation.usd}
          currency={true}
        />
        <CoinStatsCard
          title="Circulating Supply"
          data={formatNumber(coin.market_data.circulating_supply)}
          currency={false}
        />
      </div>

      <div className="flex gap-2 mb-2">
        <CoinStatsCard
          title="Total Supply"
          data={formatNumber(coin.market_data.total_supply)}
          currency={false}
        />
        <CoinStatsCard
          title="Max Supply"
          data={formatNumber(coin.market_data.max_supply)}
          currency={false}
        />
      </div>
    </section>
  );
};

export default CoinStats;
