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
    <Card>
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
