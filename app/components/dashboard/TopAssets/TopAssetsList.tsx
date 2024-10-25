import TopAssetsItem from './TopAssetsItem';

const TopAssetsList = ({ coins }) => {
  return (
    <div>
      {coins.map((coin) => (
        <TopAssetsItem coin={coin} />
      ))}
    </div>
  );
};

export default TopAssetsList;
