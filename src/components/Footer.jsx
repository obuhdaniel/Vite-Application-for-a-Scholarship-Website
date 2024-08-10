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
          <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/facebook-new.png" alt="facebook-new"/>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/twitterx--v1.png" alt="twitterx--v1"/>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img width="50" height="50" src="https://img.icons8.com/glyph-neue/50/FFFFFF/instagram-new--v1.png" alt="instagram-new--v1"/>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
