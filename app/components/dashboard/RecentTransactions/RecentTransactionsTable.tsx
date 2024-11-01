import RecentTransactionHeaders from './RecentTransactionHeaders';
import RecentTransactionRow from './RecentTransactionRow';

const RecentTransactionsTable = ({ recentTransactions }) => {
  return (
    <div>
      <RecentTransactionHeaders />
      <RecentTransactionRow recentTransactions={recentTransactions} />
    </div>
  );
};

export default RecentTransactionsTable;
