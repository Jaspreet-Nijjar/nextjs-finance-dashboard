import { RecentTransactionsProps } from '@/types/markets';
import RecentTransactionHeaders from './RecentTransactionHeaders';
import RecentTransactionRow from './RecentTransactionRow';

const RecentTransactionTable = ({
  recentTransactions,
}: {
  recentTransactions: RecentTransactionsProps;
}) => {
  return (
    <div>
      <RecentTransactionHeaders />
      <RecentTransactionRow recentTransactions={recentTransactions} />
    </div>
  );
};

export default RecentTransactionTable;
