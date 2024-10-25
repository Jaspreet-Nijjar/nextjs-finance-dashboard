import TopAssetsCard from './TopAssetsCard';

const TopAssetsList = ({ coins }) => {
  return (
    <div>
      {coins.map((coin) => (
        <TopAssetsCard coin={coin} />
      ))}
    </div>
  );
};

export default TopAssetsList;
