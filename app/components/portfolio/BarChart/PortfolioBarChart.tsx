'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../../components/ui/card';

import usePortfolioStore from '@/store/portfolioStore';
import BarChart from './BarChart';
import { cn } from '@/lib/utils';

const PortfolioBarChart = () => {
  const assets = usePortfolioStore((state) => state.assets);

  return (
    <Card className={cn('w-full')}>
      <CardHeader>
        <CardTitle>Coins</CardTitle>

        <CardDescription>
          {assets.length > 0
            ? 'View your coins below.'
            : 'You do not have any coins.'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {assets.length > 0 && <BarChart assets={assets} />}
      </CardContent>
    </Card>
  );
};

export default PortfolioBarChart;
