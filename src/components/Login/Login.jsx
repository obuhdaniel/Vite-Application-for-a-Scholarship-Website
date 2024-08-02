import React from 'react';
import './index.css'; // Create a separate CSS file for styling

import logo from '../../assets/logo.png';

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <h1>Welcome Back</h1>
        <h5>Enter your Login Details</h5>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required />
          </div>
          <div className="form-links">
            <a href="/forgot-password">Forgot Password?</a>
          </div>
          <button type="submit">Login</button>
        </form>
        <span>Don't Have an Account Yet? <a href="/register" className='copy-link'>Register</a></span>
      </div>
      <footer>
        <span>
        © 2024 The Algorithm National Competition. All Right Reserved | Powered by: <a href="" className='copy-link'>Compass Ai</a>
        </span>
      </footer>
    </div>
  );
};

export default LoginPage;
