import AssetsHeaders from './AssetsHeaders';
import AssetsRow from './AssetsRow';

const AssetsTable = ({ assets }) => {
  return (
    <section>
      <AssetsHeaders />
      <AssetsRow assets={assets} />
    </section>
  );
};

export default AssetsTable;
