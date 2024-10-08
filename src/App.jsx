// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Homepage from "./components/Homepage";
import LoginPage from "./components/Login/Login";
import RegisterPage from "./components/Register/Register";
import DashboardLayout from "./components/Dashboard/DashboardLayout";
import Payment from "./components/Dashboard/Payment";
import PersonalInfo from "./components/Dashboard/PersonalInfo";
import INstitutionalDetails from "./components/Dashboard/InstitutionalDetails";
import BankDetails from "./components/Dashboard/BankDetails";
import Acknowledgement from "./components/Dashboard/Acknowledgement";
import ProtectedRoute from "./components/Security/ProtectedRoute";
import AboutSection from "./components/About";
import ContactUs from "./components/ContactUs";
import Dashboard from "./components/Dashboard/Main";
import { AuthProvider } from "./components/Security/AuthContext";
import NotFound from "./components/Security/NotFound";

import "./index.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>

          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route path="/about" element={<AboutSection />} />
          <Route path="/contact" element={<ContactUs />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/user/personal-info" element={<DashboardLayout><PersonalInfo /></DashboardLayout>} />
            <Route
              path="/user/institution-details"
              element={<INstitutionalDetails />}
            />
            <Route path="/user/bank-details" element={<BankDetails />} />
            <Route path="/user/payment" element={<DashboardLayout><Payment /></DashboardLayout>} />
            <Route path="/user/acknowledgement" element={<Acknowledgement />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
