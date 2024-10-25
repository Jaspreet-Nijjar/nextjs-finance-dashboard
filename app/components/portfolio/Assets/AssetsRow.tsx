const AssetsRow = ({ assets }) => {
  return (
    <div>
      {assets.map((asset) => (
        <div>
          <p>{asset.name}</p>
          <p className="uppercase">{asset.symbol}</p>
        </div>
      ))}
    </div>
  );
};

export default AssetsRow;
