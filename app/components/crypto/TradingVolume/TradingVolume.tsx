import { getTradingVolume } from '@/actions/crypto';

const TradingVolume = async () => {
  const tradingVolumeData = await getTradingVolume();
  const tradingVolume = tradingVolumeData.usd;

  return (
    <div className="mt-4 border p-4 border-gray-200 rounded w-72">
      <h1 className="text-xl font-bold tracking-wide">${tradingVolume}</h1>
      <p className="text-gray-500 text-md">24hr Trading Volume</p>
    </div>
  );
};

export default TradingVolume;
