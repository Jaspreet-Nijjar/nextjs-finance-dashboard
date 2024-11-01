import { formatNumber } from '@/lib/utils';
import { RecentTransactionsProps } from '@/types/markets';
import Image from 'next/image';

const RecentTransactionRow = ({
  recentTransactions,
}: {
  recentTransactions: RecentTransactionsProps;
}) => {
  return (
    <div>
      {recentTransactions.map((transaction) => {
        const cost =
          transaction.amount * transaction.market_data.current_price.usd;

        return (
          <div
            key={transaction.id}
            className="mb-3 text-center text-gray-600 grid grid-cols-3 text-[13px] justify-between"
          >
            <div className="flex items-center gap-1">
              <Image
                src={transaction.image.small}
                alt="coin logo"
                width={20}
                height={20}
              />
              <p className="w-full">{transaction.name}</p>
            </div>

            <p>${formatNumber(cost)}</p>
            <p>{transaction.date}</p>
          </div>
        );
      })}
    </div>
  );
};

export default RecentTransactionRow;
