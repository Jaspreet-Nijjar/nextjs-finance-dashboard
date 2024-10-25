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
import Link from 'next/link';
import { cn } from '@/lib/utils';

const Assets = () => {
  const assets = usePortfolioStore((state) => state.assets);

  const hasAssets = assets.length > 0;

  return (
    <Card>
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
              <Link
                href="/markets"
                className="rounded px-2 py-0.5 text-sm bg-black text-white hover:text-orange-500 transition-all"
              >
                View All Coins
              </Link>
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
