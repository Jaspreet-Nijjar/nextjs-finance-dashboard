'use client';

import useWatchlistStore from '@/store/watchlistStore';
import Image from 'next/image';

const Watchlist = () => {
  const watchlist = useWatchlistStore((state) => state.watchlist);

  return (
    <div>
      <ul>
        {watchlist.map((coin) => (
          <li key={coin.id}>
            <p>{coin.name}</p>
            <Image
              src={coin.image.large}
              alt={coin.name}
              width={100}
              height={100}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Watchlist;
