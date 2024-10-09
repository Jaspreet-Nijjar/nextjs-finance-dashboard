'use client';
import { useEffect, useState } from 'react';
import CoinHeaders from './CoinHeaders';
import { CoinProps } from '@/types/crypto';

const CoinMarketTable = () => {
  const [coins, setCoins] = useState<CoinProps[]>([]);

  return (
    <div>
      <CoinHeaders />
    </div>
  );
};

export default CoinMarketTable;
