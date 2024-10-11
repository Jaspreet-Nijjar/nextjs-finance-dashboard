import millify from 'millify';

const TrendingCategoryItem = ({ category }) => {
  return (
    <div className="grid grid-cols-3 justify-between py-2 text-sm">
      <p>{category.name}</p>
      <p className="text-center">{category.coins_count}</p>
      <p className="text-right">${millify(category.data.market_cap)}</p>
    </div>
  );
};

export default TrendingCategoryItem;
