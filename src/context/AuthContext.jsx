import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      const response = await axios.post(
        'http://localhost:3001/api/users/login',
        { email, password },
        { withCredentials: true }
      );
      setUser(response.data.userId);
      window.location.href = '/dashboard';
    } catch (error) {
      handleLoginError(error);
    }
  };

  const handleLoginError = (error) => {
    if (error.response) {
      // Server responded with a status other than 200 range
      console.error('Login error response:', error.response.data);
    } else if (error.request) {
      // Request was made but no response received
      console.error('Login error request:', error.request);
    } else {
      // Something else caused the error
      console.error('Login error:', error.message);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };
