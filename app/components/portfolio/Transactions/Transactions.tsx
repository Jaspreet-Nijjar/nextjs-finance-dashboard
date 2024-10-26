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

const Transactions = () => {
  const assets = usePortfolioStore((state) => state.assets);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Transactions</CardTitle>
        <CardDescription>View a list of all your transactions.</CardDescription>
      </CardHeader>
      <CardContent>
        <TransactionsTable assets={assets} />
      </CardContent>
    </Card>
  );
};

export default Transactions;
