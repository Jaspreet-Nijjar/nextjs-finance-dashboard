'use client';

import usePortfolioStore from '@/store/portfolioStore';
import BalanceCard from './BalanceCard';

const Balance = () => {
  const assets = usePortfolioStore((state) => state.assets);

  const totalBalance = assets.reduce((acc, asset) => {
    const assetTotal = asset.amount * asset.market_data.current_price.usd || 0;
    return acc + assetTotal;
  }, 0);

  return (
    <div>
      <BalanceCard totalBalance={totalBalance} assets={assets} />
    </div>
  );
};

export default Balance;
