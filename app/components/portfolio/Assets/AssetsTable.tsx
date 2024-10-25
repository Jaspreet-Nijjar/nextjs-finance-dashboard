import AssetsRow from './AssetsRow';

const AssetsTable = ({ assets }) => {
  return (
    <section>
      <AssetsRow assets={assets} />
    </section>
  );
};

export default AssetsTable;
