// src/components/UserDashboard.jsx
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import './styles/UserDashboard.css'; // Create a CSS file for styling

const UserDashboard = () => {
  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard-content">
        <Sidebar />
        <main className="main-content">
          <div className="dashboard-header">
            <h1>Scholarship Portal - Candidate's Dashboard</h1>
            <div className="welcome-message">
              <p>Hello! Welcome Back, [User Name]..... <br />Registration Profile Code: [Profile Code]</p>
              <div className="exam-year">
                <label htmlFor="exam-year">Examination Year:</label>
                <select id="exam-year">
                  <option value="2024">2024 National Scholarship Examination</option>
                  {/* Add other options here */}
                </select>
              </div>
            </div>
           
            <div className="alert-message">
              <p>⚠️ Your Profile is incomplete, <Link to="/complete-profile"> Complete Now</Link> </p>
            </div>
          </div>
          <div className="dashboard-sections">
            <div className="section">
              <h2>My Profile</h2>
              <Link to="/complete-profile"> <button >View Profile</button></Link>
              
            </div>
            <div className="section">
              <h2>Payment</h2>
              <Link to="/payment">
                <button>Proceed to Payment</button>
              </Link>
            </div>
            <div className="section">
              <h2>Payment Receipt</h2>
              <button>View Payment Receipt</button>
            </div>
            <div className="section">
              <h2>Examination Slip</h2>
              <button>Print Examination Slip</button>
            </div>
            <div className="section">
              <h2>Results</h2>
              <button>View Results</button>
            </div>
            <div className="section">
              <h2>Notifications</h2>
              <ul>
                <li>Notification 1</li>
                <li>Notification 2</li>
                <li>Notification 3</li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserDashboard;
