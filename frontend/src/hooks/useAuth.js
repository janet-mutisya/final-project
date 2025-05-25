import { useState, useEffect } from 'react';

/**
 * Custom hook to manage authentication state.
 */
const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check for an authentication token in localStorage to simulate logged-in state
    const token = localStorage.getItem('authToken');
    if (token) {
      // Simulated user data; in production, fetch user info from the backend
      setUser({ username: 'FarmerJoe', email: 'farmerjoe@example.com' });
    }
  }, []);

  const login = (credentials) => {
    // Implement actual login API call here
    localStorage.setItem('authToken', 'dummyToken');
    setUser({ username: 'FarmerJoe', email: 'farmerjoe@example.com' });
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setUser(null);
  };

  return { user, login, logout };
};

export default useAuth;
