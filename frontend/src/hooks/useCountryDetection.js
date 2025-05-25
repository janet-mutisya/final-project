import { useState, useEffect } from 'react';

/**
 * Custom hook to auto-detect the user's country.
 */
const useCountryDetection = () => {
  const [country, setCountry] = useState('KENYA');

  useEffect(() => {
    // Basic detection based on browser language; replace with IP geolocation API if needed.
    const language = navigator.language || navigator.userLanguage;
    if (language.includes('en-ZA')) {
      setCountry('SOUTH AFRICA');
    } else {
      setCountry('KENYA');
    }
  }, []);

  return { country };
};

export default useCountryDetection;
