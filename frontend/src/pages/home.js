import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

/**
 * Home page – the landing page for the platform.
 */
const Home = () => {
  return (
    <div>
      <Header />
      <main style={{ padding: '20px' }}>
        <h2>Welcome to Poultry Agritech Platform</h2>
        <p>Your one-stop solution for connecting farmers with markets, buyers, and community support.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
