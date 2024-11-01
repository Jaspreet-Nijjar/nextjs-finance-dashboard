import { cn, formatNumber } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import BalanceDoughnutChart from './BalanceDoughnutChart';
import Link from 'next/link';

const BalanceCard = ({ totalBalance, assets }) => {
  return (
    <Card className={cn('w-full h-fit')}>
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
              <Link
                href="/markets"
                className="border border-gray-300 rounded px-2 py-0.5 text-sm bg-black text-white hover:text-orange-500 transition-all"
              >
                View All Coins
              </Link>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default BalanceCard;
