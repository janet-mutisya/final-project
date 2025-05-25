import React from 'react';

/**
 * Footer component with copyright information.
 */
const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Poultry Agritech Platform. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
    textAlign: 'center',
    marginTop: '20px'
  }
};

export default Footer;
