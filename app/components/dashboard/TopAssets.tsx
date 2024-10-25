import { getCoinsMarketData } from '@/actions/markets';
import TopAssetsList from './TopAssetsList';

const TopAssets = async () => {
  const coinsData = await getCoinsMarketData();
  const coins = coinsData.slice(0, 3);

  return <TopAssetsList coins={coins} />;
};

export default TopAssets;
