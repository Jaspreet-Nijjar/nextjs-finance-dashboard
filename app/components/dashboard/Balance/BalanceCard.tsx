import { formatNumber } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import BalanceDoughnutChart from './BalanceDoughnutChart';

const BalanceCard = ({ totalBalance, assets }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Balance</CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <h1 className="mt-[-20px] text-3xl font-semibold">
            ${formatNumber(totalBalance)}
          </h1>
          <BalanceDoughnutChart assets={assets} />
        </div>
      </CardContent>
    </Card>
  );
};

export default BalanceCard;
