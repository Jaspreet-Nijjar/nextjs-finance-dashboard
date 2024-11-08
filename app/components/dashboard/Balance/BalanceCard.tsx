import { cn, formatNumber } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import BalanceDoughnutChart from './BalanceDoughnutChart';
import { Asset } from '@/types/markets';
import ViewCoinsButton from '../../common/ViewCoinsButton';

const BalanceCard = ({
  totalBalance,
  assets,
}: {
  totalBalance: number;
  assets: Asset[];
}) => {
  return (
    <Card className={cn('w-full h-full')}>
      <CardHeader>
        <CardTitle>Balance</CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <h1 className="mt-[-20px] text-3xl font-semibold">
            ${formatNumber(totalBalance)}
          </h1>
          {assets.length > 0 ? (
            <BalanceDoughnutChart assets={assets} />
          ) : (
            <div>
              <p className="text-gray-600 text-[13px]">
                You currently do not have any assets.
              </p>
              <ViewCoinsButton />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default BalanceCard;
