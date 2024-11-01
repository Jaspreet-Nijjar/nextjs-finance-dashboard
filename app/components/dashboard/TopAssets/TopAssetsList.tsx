import TopAssetsItem from './TopAssetsItem';

const TopAssetsList = ({ coins }) => {
  return (
    <div className="flex max-w-sm:flex-col gap-2">
      {coins.map((coin) => (
        <TopAssetsItem coin={coin} />
      ))}
    </div>
  );
};

export default TopAssetsList;
