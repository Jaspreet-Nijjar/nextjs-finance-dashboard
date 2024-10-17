'use client';
import { useEffect, useState } from 'react';
import CoinHeaders from './CoinHeaders';
import { CoinProps } from '@/types/markets';
import { getCoinsMarketData } from '@/actions/markets';
import CoinList from './CoinList';

const CoinMarketTable = () => {
  const [coins, setCoins] = useState<CoinProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 20;

  useEffect(() => {
    const fetchCoins = async () => {
      const data = await getCoinsMarketData(currentPage, perPage);
      setCoins(data);
    };

    fetchCoins();
  }, [currentPage]);

  return (
    <div className="mb-20">
      <CoinHeaders />
      <CoinList
        coins={coins}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default CoinMarketTable;
