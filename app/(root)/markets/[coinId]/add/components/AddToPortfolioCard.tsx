import { cn } from '@/lib/utils';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../../../../components/ui/card';
import AddToPortfolioForm from './AddToPortfolioForm';

const AddToPortfolioCard = () => {
  return (
    <Card className={cn('w-[300px] lg:w-fit')}>
      <CardHeader>
        <CardTitle>Add Coin</CardTitle>
        <CardDescription>Add the coin below to your portfolio</CardDescription>
      </CardHeader>
      <CardContent>
        <AddToPortfolioForm />
      </CardContent>
    </Card>
  );
};

export default AddToPortfolioCard;
