import { RECENT_TRANSACTIONS_HEADERS } from '@/constants';

const RecentTransactionHeaders = () => {
  return (
    <div className="flex justify-between border-b border-gray-200 text-[13px]">
      {RECENT_TRANSACTIONS_HEADERS.map((header) => (
        <p className="font-bold text-center" key={header}>
          {header}
        </p>
      ))}
    </div>
  );
};

export default RecentTransactionHeaders;
