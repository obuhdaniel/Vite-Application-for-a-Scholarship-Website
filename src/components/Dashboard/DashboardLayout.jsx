import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardLayout.css';

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard">
      <div className="sidebar">
        <div className="logo">
          <img src="path-to-your-logo.png" alt="Logo" />
        </div>
        <h2>User Dashboard</h2>
        <nav>
          <ul>
            <li>
              <Link to="/payment">Payment</Link>
            </li>
            <li>
              <Link to="/personal-info">Personal Info</Link>
            </li>
            <li>
              <Link to="/institution-details">Institution Details</Link>
            </li>
            <li>
              <Link to="/bank-details">Bank Details</Link>
            </li>
            <li>
              <Link to="/acknowledgement">Acknowledgement</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="main-content">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
