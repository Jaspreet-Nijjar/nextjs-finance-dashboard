import { getGlobalData } from '@/actions/crypto';
import { CiCoinInsert } from 'react-icons/ci';
import { BsCurrencyExchange } from 'react-icons/bs';
import { SiCoinmarketcap } from 'react-icons/si';
import { FaBitcoin, FaEthereum } from 'react-icons/fa';
import Indicators from './Indicators';
import millify from 'millify';
import MarketCapBar from './MarketCapBar';

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

  const usdMarketCap = totalMarketCap.usd;
  const usdTotalVolume = totalVolume.usd;

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
        <p className="text-orange-400 items-center">${millify(usdMarketCap)}</p>

        <Indicators data={marketCapChange} />
      </div>

      <div className="hidden md:flex gap-1 items-center">
        <p>24h Vol:</p>
        <p className="text-orange-400">${millify(usdTotalVolume)}</p>
      </div>

      <MarketCapBar icon={FaBitcoin} color="orange" percentage={marketCapBTC} />

      <MarketCapBar
        icon={FaEthereum}
        color="#444971"
        percentage={marketCapETH}
      />
    </section>
  );
};

export default CoinStats;
