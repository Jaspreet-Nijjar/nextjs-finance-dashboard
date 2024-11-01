import { TRANSACTIONS_HEADERS } from '@/constants';

const TransactionsHeaders = () => {
  return (
    <div className="grid grid-cols-5 p-4 border-b border-gray-200 text-[13px]">
      {TRANSACTIONS_HEADERS.map((header) => (
        <p className="font-bold text-center" key={header}>
          {header}
        </p>
      ))}
    </div>
  );
};

export default TransactionsHeaders;
