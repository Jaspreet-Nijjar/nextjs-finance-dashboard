import { formatNumber } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';

const BalanceCard = ({ totalBalance }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Balance</CardTitle>
      </CardHeader>
      <CardContent>
        <h1 className="mt-[-20px] text-3xl font-semibold">
          ${formatNumber(totalBalance)}
        </h1>
      </CardContent>
    </Card>
  );
};

export default BalanceCard;
