import React from 'react';
import './index.css'; // Create a separate CSS file for styling

import logo from '../../assets/logo.png';

const RegisterPage = () => {
  return (
    <div className="register-page">
      <div className="register-container">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <h1>Create an Account</h1>
        <h2>Fill in your details to register</h2>
        <form>
          <div className="form-group">
            <label htmlFor="surname">Surname (Last Name)</label>
            <input type="text" id="surname" placeholder="Enter your surname" required />
          </div>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" placeholder="Enter your first name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Enter Password</label>
            <input type="password" id="password" placeholder="Enter your password" required />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" placeholder="Confirm your password" required />
          </div>
          <button type="submit">Register</button>
        </form>

        <span>Already have an account? <a href="/login" className='copy-link'>Login</a></span>
      </div>
      
    </div>
  );
};

export default RegisterPage;
