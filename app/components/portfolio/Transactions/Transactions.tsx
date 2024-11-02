'use client';

import usePortfolioStore from '@/store/portfolioStore';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../ui/card';
import TransactionsTable from './TransactionsTable';
import Link from 'next/link';
import ViewCoinsButton from '../../common/ViewCoinsButton';

const Transactions = () => {
  const assets = usePortfolioStore((state) => state.assets);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Transactions</CardTitle>
        <CardDescription>
          {assets.length > 0 ? (
            'View a list of all your transactions.'
          ) : (
            <div>
              <p className="mb-4">
                You currently do not have any assets in your portfolio.
              </p>
              <ViewCoinsButton />
            </div>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {assets.length > 0 && <TransactionsTable assets={assets} />}
      </CardContent>
    </Card>
  );
};

export default Transactions;
