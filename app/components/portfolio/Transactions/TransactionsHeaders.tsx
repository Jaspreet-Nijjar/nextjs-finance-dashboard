import { TRANSACTIONS_HEADERS } from '@/constants';

const TransactionsHeaders = () => {
  return (
    <div>
      {TRANSACTIONS_HEADERS.map((header) => (
        <p>{header}</p>
      ))}
    </div>
  );
};

export default TransactionsHeaders;
