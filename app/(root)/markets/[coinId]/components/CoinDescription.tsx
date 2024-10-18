import React from 'react';

const CoinDescription = ({ coin }) => {
  return (
    <div>
      <h1>About {coin.name}</h1>
    </div>
  );
};

export default CoinDescription;
