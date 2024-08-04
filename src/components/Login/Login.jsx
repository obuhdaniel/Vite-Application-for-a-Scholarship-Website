import React, { useState } from 'react';
import './index.css'; // Ensure this CSS file exists and has appropriate styles

import axiosInstance from '../../axiosInstance';

import logo from '../../assets/logo.png';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(""); // State for handling errors

  // Handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('users/login', formData);

      if (response.data.token) {
        // Store the token in localStorage
        localStorage.setItem('authToken', response.data.token);

        // Clear the form fields
        setFormData({
          email: "",
          password: "",
        });
        setError(""); // Clear any previous errors
      } else {
        console.error("No token received");
        setError("No token received");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setError("An error occurred during login.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <h1>Welcome Back</h1>
        <h5>Enter your Login Details</h5>
        {error && <div className="error-message">{error}</div>} {/* Display error message */}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-links">
            <a href="/forgot-password">Forgot Password?</a>
          </div>
          <button type="submit">Login</button>
        </form>
        <span>Don't Have an Account Yet? <a href="/register" className="copy-link">Register</a></span>
      </div>
      <footer>
        <span>
          © 2024 The Algorithm National Competition. All Rights Reserved | Powered by: <a href="https://compass.ai" className="copy-link">Compass Ai</a>
        </span>
      </footer>
    </div>
  );
};

export default LoginPage;
