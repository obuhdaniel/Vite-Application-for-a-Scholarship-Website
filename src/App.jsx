// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Homepage from './components/Homepage';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import LandingPage from './components/Homepage2';
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';
import ProfileForm from './components/Dashboard/ProfileForm';
import './index.css';

import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import PaymentPage from './components/Payments/PaymentPage';
import PaymentSuccess from './components/Payments/PaymentSuccess';

// import ExamSlip from './components/ExamSlip';
// import Exam from './components/Exam';

function App() {
  return (

    <AuthProvider>
      <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <UserDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/complete-profile"
            element={
              <ProtectedRoute>
                <ProfileForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/pay"
            element= {<PaymentPage />} />
          <Route
            path="/pay-successful"
            element={
              
                <PaymentSuccess />
              
            }
          />
        {/* <Route path="/exam-slip" element={<ExamSlip />} /> */}
        {/* <Route path="/exam" element={<Exam />} /> */}
        <Route path="/" element={<Homepage />} />
        <Route path="/landing-page" element={<LandingPage />} />
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;
