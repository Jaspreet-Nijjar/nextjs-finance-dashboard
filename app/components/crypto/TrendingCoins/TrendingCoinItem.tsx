import Image from 'next/image';

const TrendingCoinItem = ({ coin }: any) => {
  const { name, symbol, thumb } = coin.item;
  const { price } = coin.item.data;

  return (
    <div className="flex justify-between items-center py-2 text-sm">
      <div className="flex items-center">
        <Image src={thumb} alt={name} width={20} height={20} />
        <span className="ml-2">
          {name} ({symbol})
        </span>
      </div>
      <span>${price < 0.01 ? price.toFixed(6) : price.toFixed(3)}</span>
    </div>
  );
};

export default TrendingCoinItem;
