import React from 'react';

/**
 * Displays an individual service listing.
 */
const ServiceCard = ({ service }) => {
  return (
    <div style={cardStyle}>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <p><strong>Price:</strong> {service.price}</p>
    </div>
  );
};

const cardStyle = {
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '10px',
  margin: '10px'
};

export default ServiceCard;
