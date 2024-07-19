// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">The Algorithm</div>
      <nav className="nav">
        <a href="/">Home</a>
        
        <div className="notifications-icon">🔔</div>
      </nav>
    </header>
  );
};

export default Header;
