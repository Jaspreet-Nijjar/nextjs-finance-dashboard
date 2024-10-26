import { formatNumber } from '@/lib/utils';

const TransactionsRow = ({ assets }) => {
  const cost = assets.map((asset) => {
    return asset.amount * asset.market_data.current_price.usd;
  });

  return (
    <div className="text-[13px]">
      {assets.map((asset) => (
        <div className="grid grid-cols-5 mb-4 text-center">
          <p>{asset.name}</p>
          <p>{asset.amount}</p>
          <p>${formatNumber(cost)}</p>
          <p className="text-green-600">Completed</p>
          {/* <p>Date</p> */}
        </div>
      ))}
    </div>
  );
};

export default TransactionsRow;
