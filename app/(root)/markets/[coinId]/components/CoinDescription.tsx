'use client';
import { useState } from 'react';
import DOMPurify from 'isomorphic-dompurify';
import { CoinDescriptionProps } from '@/types/markets';
import { Button } from '@/components/ui/button';

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
      <Button
        onClick={handleToggle}
        variant="secondary"
        className="bg-orange-300 text-white hover:bg-orange-400 transition-all mt-2"
      >
        {expandText ? 'Read Less' : 'Read More'}
      </Button>
    </div>
  );
};

export default CoinDescription;
