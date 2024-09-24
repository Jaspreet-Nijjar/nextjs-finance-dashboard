import { getGlobalData } from '@/actions/crypto';
import { CiCoinInsert } from 'react-icons/ci';

const CoinStats = async () => {
  const { activeCrypto } = await getGlobalData();

  return (
    <section className="text-xs text-white bg-black p-4 flex fixed top-0 w-screen ml-[-5px]">
      <div className="flex gap-1 items-center">
        <CiCoinInsert size={20} />
        <p>Coins: </p>
        <span className="text-orange-400">{activeCrypto}</span>
      </div>
    </section>
  );
};

export default CoinStats;
