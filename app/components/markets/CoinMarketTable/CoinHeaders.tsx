import { COIN_HEADERS, COIN_HEADERS_CLASSES } from '@/constants';

const CoinHeaders = () => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-11 p-4 border-b border-gray-200 text-xs">
      {COIN_HEADERS.map((header, index) => (
        <div key={index} className={COIN_HEADERS_CLASSES[index]}>
          {header}
        </div>
      ))}
    </div>
  );
};

export default CoinHeaders;
