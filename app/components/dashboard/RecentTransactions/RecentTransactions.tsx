'use client';
import { cn } from '@/lib/utils';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../../components/ui/card';

import usePortfolioStore from '@/store/portfolioStore';
import RecentTransactionsTable from './RecentTransactionsTable';
import Link from 'next/link';

const RecentTransactions = () => {
  const assetData = usePortfolioStore((state) => state.assets);
  const recentTransactions = assetData.slice(0, 3);

  return (
    <Card className={cn('w-full h-full')}>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
        <CardDescription>
          {recentTransactions.length > 0
            ? 'View your most recent transactions below.'
            : 'You do not have any transactions.'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {assetData.length > 0 && (
          <div>
            <RecentTransactionsTable recentTransactions={recentTransactions} />
            <Link
              href="/portfolio"
              className="border border-gray-300 rounded px-2 py-0.5 text-sm bg-black text-white hover:text-orange-500 transition-all"
            >
              View All Transactions
            </Link>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default RecentTransactions;
