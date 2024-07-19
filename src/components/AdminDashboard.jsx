// src/components/AdminDashboard.jsx
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const AdminDashboard = () => {
  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard-content">
        <Sidebar />
        <main className="main-content">
          <h1>Admin Dashboard</h1>
          <section className="overview-section">
            <h2>Overview Statistics</h2>
            <p>Total Applications: [Number]</p>
            <p>Payments Received: [Amount]</p>
            <p>Upcoming Examinations: [Number]</p>
            <p>Published Results: [Number]</p>
          </section>
          <section className="recent-activities-section">
            <h2>Recent Activities:</h2>
            <ul>
              <li>Activity 1</li>
              <li>Activity 2</li>
              <li>Activity 3</li>
            </ul>
          </section>
          <section className="manage-applications-section">
            <h2>Manage Applications</h2>
            <ul>
              <li>Application 1</li>
              <li>Application 2</li>
            </ul>
          </section>
          <section className="payments-section">
            <h2>Payments</h2>
            <ul>
              <li>Payment 1</li>
              <li>Payment 2</li>
            </ul>
          </section>
          <section className="examination-schedule-section">
            <h2>Examination Schedule</h2>
            <button>Set Examination Date and Time</button>
            <ul>
              <li>Scheduled Examination 1</li>
              <li>Scheduled Examination 2</li>
            </ul>
          </section>
          <section className="results-management-section">
            <h2>Results Management</h2>
            <button>Upload and Publish Results</button>
          </section>
          <section className="user-management-section">
            <h2>User Management</h2>
            <ul>
              <li>User 1</li>
              <li>User 2</li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
