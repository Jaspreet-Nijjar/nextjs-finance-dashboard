import { WATCHLIST_HEADERS, WATCHLIST_HEADERS_CLASSES } from '@/constants';

const WatchlistHeaders = () => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
      {WATCHLIST_HEADERS.map((header, index) => (
        <p className={WATCHLIST_HEADERS_CLASSES[index]} key={header}>
          {header}
        </p>
      ))}
    </div>
  );
};

export default WatchlistHeaders;
