import {
  getCoinsMarketData,
  getSingleCoin,
  getCoinMarketData,
} from '@/actions/markets';
import CoinInfo from './components/CoinInfo';
import TrendingCoins from '@/app/components/markets/TrendingCoins/TrendingCoins';
import CoinLinks from './components/CoinLinks';
import CoinDescription from './components/CoinDescription';
import PopularCoins from './components/PopularCoins';
import TrendingCategories from '@/app/components/markets/TrendingCategories/TrendingCategories';
import CoinStats from './components/CoinStats';
import CoinPerformance from './components/CoinPerformance';
import PriceHistoryChart from './components/PriceHistoryChart';

export async function generateMetadata({
  params,
}: {
  params: { coinId: string };
}) {
  const coin = await getSingleCoin(params.coinId);

  return {
    title: `${coin.name}`,
    description: `Learn more about ${coin.name}, including the price, market cap and other financial information.`,
  };
}

const SingleCoin = async ({ params }: { params: { coinId: string } }) => {
  const coin = await getSingleCoin(params.coinId);
  const coinsData = await getCoinsMarketData();
  const coins = coinsData.slice(0, 5);
  const coinMarketData = await getCoinMarketData(params.coinId);

  return (
    <div className="flex flex-col p-4 mt-12 ml-[70px] md:ml-[250px] mb-10">
      <CoinInfo coin={coin} />
      <CoinDescription coin={coin} />
      <div className="flex justify-between">
        <div>
          <CoinStats coin={coin} />
          <CoinLinks coin={coin} />
        </div>

        <div className="hidden xl:block">
          <PriceHistoryChart coinMarketData={coinMarketData} />
        </div>
      </div>

      <CoinPerformance coin={coin} />

      <div className="flex flex-col lg:flex-row gap-20">
        <TrendingCoins />
        <TrendingCategories />
      </div>

      <PopularCoins coins={coins} />
    </div>
  );
};

export default SingleCoin;
