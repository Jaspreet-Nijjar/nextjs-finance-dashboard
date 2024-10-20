import millify from 'millify';
import CoinStatsCard from './CoinStatsCard';
import { formatNumber } from '@/lib/utils';

const CoinStats = ({ coin }) => {
  return (
    <section>
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

      <CoinStatsCard
        title="Fully Diluted Validation"
        data={coin.market_data.fully_diluted_valuation.usd}
        currency={true}
      />
      <CoinStatsCard
        title="Circulating Supply"
        data={formatNumber(coin.market_data.circulating_supply)}
      />
      <CoinStatsCard
        title="Total Supply"
        data={formatNumber(coin.market_data.total_supply)}
      />
      <CoinStatsCard
        title="Max Supply"
        data={formatNumber(coin.market_data.max_supply)}
      />
    </section>
  );
};

export default CoinStats;
