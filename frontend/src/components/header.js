import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Header component with navigation links.
 */
const Header = () => {
  return (
    <header style={styles.header}>
      <h1>Poultry Agritech Platform</h1>
      <nav>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/marketplace" style={styles.link}>Marketplace</Link>
        <Link to="/community" style={styles.link}>Community</Link>
        <Link to="/profile" style={styles.link}>Profile</Link>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#4CAF50',
    padding: '10px',
    color: '#fff',
    textAlign: 'center'
  },
  link: {
    margin: '0 10px',
    color: '#fff',
    textDecoration: 'none'
  }
};

export default Header;
