import { CategoryProps } from '@/types/markets';
import TrendingCategoryItem from './TrendingCategoryItem';

const TrendingCategoriesList = ({ categories }: CategoryProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between text-orange-500 text-sm font-semibold border-b border-gray-300 pb-2 mb-2">
        <p>Category</p>
        <p className="text-center">Number of Coins</p>
        <p className="text-right">Market Cap</p>
      </div>

      {categories.map((category) => (
        <TrendingCategoryItem key={category.name} category={category} />
      ))}
    </div>
  );
};

export default TrendingCategoriesList;
