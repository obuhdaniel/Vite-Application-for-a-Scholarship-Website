// Footer.js
import React from 'react';
import './styles/index.css';
import logo from "../assets/logo.png";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="Logo" className="logo-image" />
        </div>
        <nav className="footer-nav">
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/path/to/facebook-icon.png" alt="Facebook" className="social-icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="/path/to/twitter-icon.png" alt="Twitter" className="social-icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/path/to/instagram-icon.png" alt="Instagram" className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
