import { getSingleCoin, getSingleCoinMarketData } from '@/actions/markets';
import CoinInfo from './components/CoinInfo';

const SingleCoin = async ({ params }: { params: { coinId: string } }) => {
  const coin = await getSingleCoin(params.coinId);
  const coinMarketData = await getSingleCoinMarketData(params.coinId);

  return (
    <div className="flex flex-col p-4 mt-12 ml-[70px] md:ml-[250px]">
      <CoinInfo coin={coin} marketData={coinMarketData} />
    </div>
  );
};

export default SingleCoin;
