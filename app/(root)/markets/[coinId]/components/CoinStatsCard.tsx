import { Card, CardContent } from '../../../../components/ui/card';

const CoinStatsCard = ({ children, title, data }: any) => {
  return (
    <Card>
      <CardContent>
        <p>{title}</p>
        <p>{data}</p>
      </CardContent>
    </Card>
  );
};

export default CoinStatsCard;
