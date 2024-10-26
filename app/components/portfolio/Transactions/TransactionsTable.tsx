import TransactionsHeaders from './TransactionsHeaders';
import TransactionsRow from './TransactionsRow';

const TransactionsTable = ({ assets }) => {
  return (
    <div>
      <TransactionsHeaders />
      <TransactionsRow assets={assets} />
    </div>
  );
};

export default TransactionsTable;
