import React, { useState } from 'react';
import axios from 'axios';
import './index.css'; // Create a separate CSS file for styling

import logo from '../../assets/logo.png';

const RegisterPage = () => {
  // State hooks to manage form input
  const [surname, setSurname] = useState('');
  const [firstname, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const userData = {
      surname,
      firstname,
      email,
      password,
    };

    try {
      // Replace 'http://your-backend-api/register' with your actual backend URL
      const response = await axios.post('http://localhost:3001/api/users/register', userData);
      
      // Handle success response
      setSuccess("Registration successful! Please login.");
      setError('');
      console.log("Response data:", response.data);

      // Clear the form fields
      

      // Redirect to the login page or display a success message

      if (response.status === 200 || response.status === 201) {
        setSuccess("User registered successfully");
        // Redirect to the login page using window.location
        window.location.href = "/login";
      } else {
        // Handle error response status
        console.error("Registration failed. Status:", response.status);
        setError("Registration failed. Status:", response.status);
      }
    } catch (err) {
      // Handle error response
      setError(err.response?.data?.message || "Registration failed. Please try again.");
      setSuccess('');
    }
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <h1>Create an Account</h1>
        <h2>Fill in your details to register</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="surname">Surname (Last Name)</label>
            <input
              type="text"
              id="surname"
              placeholder="Enter your surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              id="firstname"
              placeholder="Enter your first name"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Enter Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Register</button>
        </form>

        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}

        <span>Already have an account? <a href="/login" className='copy-link'>Login</a></span>
      </div>
    </div>
  );
};

export default RegisterPage;
