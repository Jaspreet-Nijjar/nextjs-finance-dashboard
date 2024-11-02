import Indicators from '@/app/components/common/Indicators';
import { CoinPerformanceProps } from '@/types/markets';

const CoinPerformance = ({ coin }: { coin: CoinPerformanceProps }) => {
  return (
    <section className="mb-4">
      <h1 className="border-b border-gray-300 mb-2 text-xl text-gray-600">
        {coin.name} Price Analysis
      </h1>

      <div className="border border-gray-300 rounded grid grid-cols-5 text-sm text-center">
        <div>
          <p className="bg-gray-200 border-b border-r border-gray-300 p-2">
            24h
          </p>
          <div className="border-r border-gray-300 p-2">
            <Indicators data={coin.market_data.price_change_percentage_24h} />
          </div>
        </div>

        <div>
          <p className="bg-gray-200 border-b border-r border-gray-300 p-2">
            7d
          </p>
          <div className="border-r border-gray-300 p-2">
            <Indicators data={coin.market_data.price_change_percentage_7d} />
          </div>
        </div>

        <div>
          <p className="bg-gray-200 border-b border-r border-gray-300 p-2">
            14d
          </p>
          <div className="border-r border-gray-300 p-2">
            <Indicators data={coin.market_data.price_change_percentage_14d} />
          </div>
        </div>

        <div>
          <p className="bg-gray-200 border-b border-r border-gray-300 p-2">
            30d
          </p>
          <div className="border-r border-gray-300 p-2">
            <Indicators data={coin.market_data.price_change_percentage_30d} />
          </div>
        </div>

        <div>
          <p className="bg-gray-200 border-b border-r border-gray-300 p-2">
            1y
          </p>
          <div className="border-r border-gray-300 p-2">
            <Indicators data={coin.market_data.price_change_percentage_1y} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoinPerformance;
