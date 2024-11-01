import { formatNumber } from '@/lib/utils';

const RecentTransactionRow = ({ recentTransactions }) => {
  const cost = recentTransactions.map((transaction) => {
    return transaction.amount * transaction.market_data.current_price.usd;
  });

  return (
    <div>
      {recentTransactions.map((transaction) => (
        <div className="grid grid-cols-3 text-[13px] justify-between">
          <p>{transaction.name}</p>
          <p>${formatNumber(cost)}</p>
          <p>{transaction.date}</p>
        </div>
      ))}
    </div>
  );
};

export default RecentTransactionRow;
