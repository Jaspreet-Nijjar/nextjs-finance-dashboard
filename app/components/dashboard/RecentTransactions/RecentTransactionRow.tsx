import { formatNumber } from '@/lib/utils';
import { RecentTransactionsProps } from '@/types/markets';
import Image from 'next/image';
import Link from 'next/link';

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
            <div className="flex items-center gap-4">
              {transaction.image.small ? (
                <Image
                  src={transaction.image.small}
                  alt={`${transaction.name} logo`}
                  width={20}
                  height={20}
                />
              ) : (
                <div className="w-5 h-5 bg-gray-300 flex items-center justify-center text-gray-600">
                  <span className="text-xs">?</span>
                </div>
              )}
              <Link
                href={`/markets/${transaction.id}`}
                className="hover:text-orange-500 transition-all"
              >
                {transaction.name}
              </Link>
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
