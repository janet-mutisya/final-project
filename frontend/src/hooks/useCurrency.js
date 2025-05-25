import { useState, useEffect } from 'react';

/**
 * Custom hook to handle currency conversion and provide current currency.
 */
const useCurrency = () => {
  const [currency, setCurrency] = useState('KES');
  const [exchangeRate, setExchangeRate] = useState(1);

  useEffect(() => {
    // For demonstration: assume a fixed exchange rate (1 KES = 0.15 ZAR)
    setExchangeRate(0.15);
  }, []);

  // Convert the given amount to target currency (dummy conversion)
  const convertTo = (amount, targetCurrency) => {
    if (targetCurrency === 'ZAR') {
      return amount * exchangeRate;
    }
    return amount;
  };

  return { currency, convertTo };
};

export default useCurrency;
