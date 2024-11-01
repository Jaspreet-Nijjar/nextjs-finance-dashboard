import { CoinProps } from '@/types/markets';
import CoinRow from './CoinRow';
import Pagination from '../../common/Pagination';

export type CoinListProps = {
  coins: CoinProps[];
  currentPage: number;
  onPageChange: (page: number) => void;
};

const CoinList = ({ coins, currentPage, onPageChange }: CoinListProps) => {
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
