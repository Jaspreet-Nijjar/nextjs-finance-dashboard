import { getSingleCoin } from '@/actions/markets';
import CoinInfo from './components/CoinInfo';
import TrendingCoins from '@/app/components/markets/TrendingCoins/TrendingCoins';
import CoinLinks from './components/CoinLinks';
import CoinDescription from './components/CoinDescription';

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

  return (
    <div className="flex flex-col p-4 mt-12 ml-[70px] md:ml-[250px]">
      <CoinInfo coin={coin} />
      <CoinDescription coin={coin} />
      <CoinLinks coin={coin} />
      <TrendingCoins />
    </div>
  );
};

export default SingleCoin;
