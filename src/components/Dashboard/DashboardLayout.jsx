import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardLayout.css';
import logo from '../../assets/logo.png';

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard">
      <div className="sidebar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <h2 className="user-text">User Dashboard</h2>
        <nav>
          <ul>
            <li>
              <Link to="/user/payment">Payment</Link>
            </li>
            <li>
              <Link to="/user/personal-info">Personal Info</Link>
            </li>
            <li>
              <Link to="/user/institution-details">Institution Details</Link>
            </li>
            <li>
              <Link to="/user/bank-details">Bank Details</Link>
            </li>
            <li>
              <Link to="/user/acknowledgement">Acknowledgement</Link>
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
