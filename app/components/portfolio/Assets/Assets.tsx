'use client';

import usePortfolioStore from '@/store/portfolioStore';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../ui/card';
import AssetsTable from './AssetsTable';

const Assets = () => {
  const assets = usePortfolioStore((state) => state.assets);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Assets</CardTitle>
        <CardDescription>
          View the coins you have added to your portfolio below
        </CardDescription>
      </CardHeader>
      <CardContent>
        <AssetsTable assets={assets} />
      </CardContent>
    </Card>
  );
};

export default Assets;
