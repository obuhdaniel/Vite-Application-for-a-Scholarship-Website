import React, {useState} from 'react';
import './styles/index.css'; 
import logo from '../assets/logo.png';
import studyPic from '../assets/study.jpg';
import { Link } from 'react-router-dom';

const Homepage = () => {

    const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      // Handle the email submission logic here (e.g., API call)
      console.log('Email submitted:', email);
      setError('');
      setEmail('');
    } else {
      setError('Please enter a valid email address');
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
    return (
        <div>
            <header className="navbar">
                <nav className="navigation">
                    <div className="logo">The Algorithm</div>
                    <ul className="nav-list">
                        <li className="nav-list-item"><Link to="/">Home</Link></li>
                        <li className="nav-list-item"><Link to="/quick-links">Quick Links</Link></li>
                        <li className="nav-list-item"><Link to="/news">News</Link></li>
                        <li className="nav-list-item"><Link to="/about">About Us</Link></li>
                        <li className="nav-list-item"><Link to="/contact">Contact Us</Link></li>
                    </ul>
                    <div className="nav-actions">
                        <Link to="/login" className="action-buttons-login">Log In</Link>
                        <Link to="/register" className="action-buttons">Register</Link>
                    </div>
                </nav>
            </header>

            <section className="hero-section">
                <div className="hero">
                    <div className="hero-texts">
                        <h1 className="hero-text-1">Unlock Your Future: The Algorithm National Scholarship Examination</h1>
                        <p className="hero-text-2">Sharpen Your Skills, Rise to the Challenge - Compete for Your Future Success</p>
                    </div>
                </div>
            </section>

            

            <div className="newsletter-signup">
      <h2>Subscribe to our Newsletter</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />
        <button type="submit">Subscribe</button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>


            <section className="footer">
                <div className="footer-logo">
                    <img src={logo} alt="The Algorithm Logo" className="footer-logo-image" />
                    <p className="motto">Enhancing Academic Excellence</p>
                </div>
                <div className="footer-contact">
                    <h3 className="contact">Contact Us</h3>
                    <p>Email: info@thealgorithm.com</p>
                    <p>Phone: +2348105772774, +2349022439482</p>
                </div>
            </section>
        </div>
    );
}

export default Homepage;
