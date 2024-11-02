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
import ViewCoinsButton from '../../common/ViewCoinsButton';
import { cn } from '@/lib/utils';

const Assets = () => {
  const assets = usePortfolioStore((state) => state.assets);

  const hasAssets = assets.length > 0;

  return (
    <Card className={cn('w-full')}>
      <CardHeader>
        <CardTitle>Assets</CardTitle>
        <CardDescription>
          {hasAssets ? (
            'View the coins you have added to your portfolio below.'
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
      {hasAssets && (
        <CardContent>
          <AssetsTable assets={assets} />
        </CardContent>
      )}
    </Card>
  );
};

export default Assets;
