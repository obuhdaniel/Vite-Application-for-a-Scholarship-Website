import React, { useContext } from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const ProtectedRoute = () => {
  const { user, loading } = useContext(AuthContext);
  console.log(user);

  // While loading, you can return a loading spinner or nothing
  if (loading) {
    return <div>Loading...</div>; // Or a loading spinner, depending on your preference
  }

  // If the user is logged in, render the child components
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
