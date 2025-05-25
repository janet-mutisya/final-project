import React, { useEffect, useState } from 'react';
import MarketPrice from '../components/MarketPrice';
import ServiceCard from '../components/ServiceCard';

/**
 * Marketplace page – shows service listings and current market prices.
 */
const Marketplace = () => {
  const [services, setServices] = useState([]);
  const [marketPrice, setMarketPrice] = useState({ price: 0, currency: 'KES' });

  useEffect(() => {
    // Fetch services and market prices from backend APIs (using dummy data for now)
    setServices([
      { id: 1, title: 'Fresh Eggs', description: 'Organic free-range eggs.', price: '200 KES' },
      { id: 2, title: 'Chicken Meat', description: 'Premium quality chicken meat.', price: '500 KES' }
    ]);
    setMarketPrice({ price: 250, currency: 'KES' });
  }, []);

  return (
    <div>
      <h2>Marketplace</h2>
      <MarketPrice price={marketPrice.price} currency={marketPrice.currency} />
      <div>
        {services.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
