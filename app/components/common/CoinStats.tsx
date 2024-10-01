import { getGlobalData } from '@/actions/crypto';
import { CiCoinInsert } from 'react-icons/ci';
import { BsCurrencyExchange } from 'react-icons/bs';
import { SiCoinmarketcap } from 'react-icons/si';
import { FaBitcoin, FaEthereum } from 'react-icons/fa';
import Indicators from './Indicators';
import millify from 'millify';

const CoinStats = async () => {
  const {
    activeCrypto,
    markets,
    totalMarketCap,
    marketCapChange,
    totalVolume,
    marketCapBTC,
    marketCapETH,
  } = await getGlobalData();

  const marketCapUSD = totalMarketCap.usd;
  const totalVolumeUSD = totalVolume.usd;

  return (
    <section className="text-xs text-white bg-black p-4 flex gap-12 fixed top-0 w-screen justify-center">
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

      <div className="hidden md:flex gap-1 items-center">
        <SiCoinmarketcap size={15} />
        <p>Market Cap:</p>
        <p className="text-orange-400 items-center">${millify(marketCapUSD)}</p>

        <Indicators data={marketCapChange} />
      </div>

      <div className="hidden md:flex gap-1 items-center">
        <p>24h Vol:</p>
        <p className="text-orange-400">${millify(totalVolumeUSD)}</p>
      </div>

      <div className="hidden lg:flex items-center gap-2">
        <FaBitcoin size="20" color="orange" />
        <p>{marketCapBTC.toFixed(0)}%</p>
        <div className="relative w-16 h-2 bg-gray-200 rounded">
          <div
            className="absolute left-0 top-0 h-full bg-orange-400 rounded"
            style={{ width: `${marketCapBTC}%` }}
          ></div>
        </div>
      </div>

      <div className="hidden lg:flex items-center gap-2">
        <FaEthereum size="20" color="#444971" />
        <p>{marketCapETH.toFixed(0)}%</p>
        <div className="relative w-16 h-2 bg-gray-200 rounded">
          <div
            className="absolute left-0 top-0 h-full bg-orange-400 rounded"
            style={{ width: `${marketCapETH}%` }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default CoinStats;
