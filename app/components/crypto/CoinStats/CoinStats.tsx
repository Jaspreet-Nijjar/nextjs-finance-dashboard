import { getGlobalData } from '@/actions/crypto';
import { CiCoinInsert } from 'react-icons/ci';
import { BsCurrencyExchange } from 'react-icons/bs';

const CoinStats = async () => {
  const { activeCrypto, markets } = await getGlobalData();

  return (
    <section className="text-xs text-white bg-black p-4 flex justify-around fixed top-0 w-screen ml-[-5px]">
      <div className="flex gap-1 items-center">
        <CiCoinInsert size={20} />
        <p>Coins: </p>
        <span className="text-orange-400">{activeCrypto}</span>
      </div>

      <div className="flex gap-1 items-center">
        <BsCurrencyExchange size={15} />
        <p>Exchanges:</p>
        <p className="text-orange-400">{markets}</p>
      </div>
    </section>
  );
};

export default CoinStats;
