import { CoinProps } from '@/types/crypto';
import CoinRow from './CoinRow';
import Pagination from '../../common/Pagination';

const CoinList = ({ coins, currentPage, onPageChange }) => {
  return (
    <div>
      {coins.map((coin: CoinProps) => (
        <CoinRow coin={coin} />
      ))}
      <Pagination currentPage={currentPage} onPageChange={onPageChange} />
    </div>
  );
};

export default CoinList;
