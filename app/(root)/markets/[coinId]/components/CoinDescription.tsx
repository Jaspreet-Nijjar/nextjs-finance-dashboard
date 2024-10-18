import DOMPurify from 'isomorphic-dompurify';

const CoinDescription = ({ coin }) => {
  return (
    <div>
      <h1 className="border-b border-gray-300 text-xl">About {coin.name}</h1>

      <p
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(coin.description.en),
        }}
        className="text-sm"
      ></p>
    </div>
  );
};

export default CoinDescription;
