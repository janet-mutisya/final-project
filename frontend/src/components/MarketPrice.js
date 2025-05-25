import React from 'react';

/**
 * Displays local market price information with currency.
 */
const MarketPrice = ({ price, currency }) => {
  return (
    <div>
      <h4>Current Market Price</h4>
      <p>{price} {currency}</p>
    </div>
  );
};

export default MarketPrice;
