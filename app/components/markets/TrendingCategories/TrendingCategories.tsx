import { getTrendingData } from '@/actions/markets';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../ui/card';
import { cn } from '@/lib/utils';
import TrendingCategoriesList from './TrendingCategoriesList';

const TrendingCategories = async () => {
  const trendingData = await getTrendingData();
  const trendingCategories = trendingData.categories.slice(0, 3);

  return (
    <Card className={cn('w-[90%] lg:w-fit hidden xl:block')}>
      <CardHeader>
        <CardTitle className="text-center">Trending Categories</CardTitle>
        <CardDescription>
          These are the top 3 trending categories in the last 24 hours
        </CardDescription>
      </CardHeader>
      <CardContent>
        <TrendingCategoriesList categories={trendingCategories} />
      </CardContent>
    </Card>
  );
};

export default TrendingCategories;
