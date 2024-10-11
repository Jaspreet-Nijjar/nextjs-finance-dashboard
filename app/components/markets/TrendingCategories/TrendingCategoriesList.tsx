import TrendingCategoryItem from './TrendingCategoryItem';

const TrendingCategoriesList = ({ categories }) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between text-orange-500 text-sm font-semibold border-b border-gray-300 pb-2 mb-2">
        <p>Category</p>
        <p className="text-center">Number of Coins</p>
        <p className="text-right">Market Cap</p>
      </div>

      {categories.map((category: any) => (
        <TrendingCategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default TrendingCategoriesList;
