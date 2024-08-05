import React, { useContext } from 'react';
import { AuthContext } from '../Security/AuthContext';

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  console.log(user)

  return (
    <div>
      <h1>Welcome, {user?.name}</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
