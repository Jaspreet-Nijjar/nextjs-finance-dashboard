'use client';
import { useState } from 'react';
import DOMPurify from 'isomorphic-dompurify';
import { CoinDescriptionProps } from '@/types/markets';

const CoinDescription = ({ coin }: CoinDescriptionProps) => {
  const [expandText, setExpandText] = useState(false);

  const handleToggle = () => {
    setExpandText(!expandText);
  };

  const shortenedText =
    coin.description.en.length > 500
      ? `${coin.description.en.substring(0, 500)}...`
      : coin.description.en;

  const description = coin.description.en;

  return (
    <div>
      <h1 className="border-b border-gray-300 text-xl text-gray-600">
        About {coin.name}
      </h1>

      <p
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(expandText ? description : shortenedText),
        }}
        className="text-sm"
      ></p>
      <button onClick={handleToggle}>
        {expandText ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
};

export default CoinDescription;
