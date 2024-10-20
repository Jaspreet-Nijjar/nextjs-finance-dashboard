import millify from 'millify';
import { Card, CardContent } from '../../../../components/ui/card';

const CoinStatsCard = ({ title, currency = false, data }: any) => {
  return (
    <Card>
      <CardContent>
        <p>{title}</p>
        <p>{currency ? `$${millify(data)}` : data}</p>
      </CardContent>
    </Card>
  );
};

export default CoinStatsCard;
