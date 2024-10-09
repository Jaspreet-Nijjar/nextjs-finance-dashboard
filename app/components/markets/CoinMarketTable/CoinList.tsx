import { CoinProps } from '@/types/crypto';
import CoinRow from './CoinRow';

const CoinList = ({ coins }) => {
  return (
    <div>
      {coins.map((coin: CoinProps) => (
        <CoinRow coin={coin} />
      ))}
    </div>
  );
};

export default CoinList;
