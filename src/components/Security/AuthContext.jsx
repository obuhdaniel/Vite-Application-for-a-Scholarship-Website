import React, { createContext, useState, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode'; // Make sure to import jwtDecode correctly

// Create the context
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('authToken');
        if (token) {
          const decodedToken = jwtDecode(token);
          setUser(decodedToken);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error('Error decoding token:', error);
        setUser(null);
      } finally {
        setLoading(false); // Set loading to false when the check is done
      }
    };

    checkAuth(); // Call the async function
  }, []);

  const login = (token) => {
    localStorage.setItem('authToken', token);
    const decodedToken = jwtDecode(token);
    setUser(decodedToken);
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setUser(null);
  };

  console.log(user);

  // Provide a loading state to components so they can wait until auth is resolved
  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
