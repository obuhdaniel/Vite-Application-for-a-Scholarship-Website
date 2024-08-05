import React from "react";
import './styles/index.css';

import { Link } from "react-router-dom";



const Header = () => {
    return(
        <header className="navbar">
        <nav className="navigation">
          <div className="logo">The Algorithm</div>
          <ul className="nav-list">
            <li className="nav-list-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-list-item">
              <Link to="/quick-links">Quick Links</Link>
            </li>
            <li className="nav-list-item">
              <Link to="/news">News</Link>
            </li>
            <li className="nav-list-item">
              <Link to="/about">About Us</Link>
            </li>
            <li className="nav-list-item">
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
          <div className="nav-actions">
            <Link to="/login" className="action-buttons-login">
              Log In
            </Link>
            <Link to="/register" className="action-buttons">
              Register
            </Link>
          </div>
        </nav>
      </header>
    );
}

export default Header;