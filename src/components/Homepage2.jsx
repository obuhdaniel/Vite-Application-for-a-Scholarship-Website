import React from 'react';
import './styles/landing.css';

function LandingPage() {
  return (
    <div className="app">
      <header className="app-header">
        <div className="logo">
          <h1>the algorithm</h1>
        </div>
        <nav className="nav">
          <a href="#about">About Us</a>
          <a href="#programs">Our Programs</a>
          <a href="#contact">Contact Us</a>
          <a href="#join" className="join-button">Join Us!</a>
        </nav>
      </header>
      <main className="main-content">
        <div className="welcome-message">
          <h2>Welcome to the algorithm!</h2>
          <h1>Sow Your Seeds of Success here!</h1>
          <p>Empowering aspirations, the algorithm is your gateway to a flourishing future in the fields of opportunity.</p>
          <div className="buttons">
            <a href="#join" className="join-button">Join Us!</a>
            <a href="#about" className="about-button">About Us</a>
          </div>
        </div>
        <div className="illustration">
          <img src="illustration.png" alt="Illustration" />
        </div>
      </main>
    </div>
  );
}

export default LandingPage;
