import { AssetsProps } from '@/types/markets';
import AssetsHeaders from './AssetsHeaders';
import AssetsRow from './AssetsRow';

const AssetsTable = ({ assets }: AssetsProps) => {
  return (
    <section>
      <AssetsHeaders />
      <AssetsRow assets={assets} />
    </section>
  );
};

export default AssetsTable;
