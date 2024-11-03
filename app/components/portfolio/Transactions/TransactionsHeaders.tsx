import {
  TRANSACTIONS_HEADERS,
  TRANSACTIONS_HEADERS_CLASSES,
} from '@/constants';

const TransactionsHeaders = () => {
  return (
    <div className="grid grid-cols-4 lg:grid-cols-5 p-4 border-b border-gray-200 text-[13px]">
      {TRANSACTIONS_HEADERS.map((header, index) => (
        <p className={TRANSACTIONS_HEADERS_CLASSES[index]} key={header}>
          {header}
        </p>
      ))}
    </div>
  );
};

export default TransactionsHeaders;
