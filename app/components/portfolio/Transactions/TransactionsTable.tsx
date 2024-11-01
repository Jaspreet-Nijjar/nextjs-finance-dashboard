import { AssetsProps } from '@/types/markets';
import TransactionsHeaders from './TransactionsHeaders';
import TransactionsRow from './TransactionsRow';

const TransactionsTable = ({ assets }: AssetsProps) => {
  return (
    <div>
      <TransactionsHeaders />
      <TransactionsRow assets={assets} />
    </div>
  );
};

export default TransactionsTable;
