'use client';
import { useEffect, useState } from 'react';
import CoinHeaders from './CoinHeaders';
import { CoinProps } from '@/types/crypto';
import { getCoinsMarketData } from '@/actions/crypto';
import CoinList from './CoinList';

const CoinMarketTable = () => {
  const [coins, setCoins] = useState<CoinProps[]>([]);

  useEffect(() => {
    const fetchCoins = async () => {
      const data = await getCoinsMarketData();
      setCoins(data);
    };

    fetchCoins();
  });

  return (
    <div>
      <CoinHeaders />
      <CoinList coins={coins} />
    </div>
  );
};

export default CoinMarketTable;
