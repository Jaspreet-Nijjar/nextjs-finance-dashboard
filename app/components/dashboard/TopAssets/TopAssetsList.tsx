import { TopAssetsListProps } from '@/types/markets';
import TopAssetsItem from './TopAssetsItem';

const TopAssetsList = ({ coins }: TopAssetsListProps) => {
  return (
    <div className="max-w-sm:flex-col xl:flex xl:flex-row gap-2">
      {coins.map((coin) => (
        <TopAssetsItem key={coin.id} coin={coin} />
      ))}
    </div>
  );
};

export default TopAssetsList;
