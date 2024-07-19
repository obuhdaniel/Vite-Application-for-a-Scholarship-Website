import React from 'react';
import './styles/index.css'; 
import logo from '../assets/logo.png';
import studyPic from '../assets/study.jpg';

import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <div>
            <div className="navbar">
                <nav className="navigation">
                    <div className="logo">The Algorithm</div>
                    <div className="nav-items">
                        <ul className="nav-list">
                            <li className="nav-list-item">Home</li>
                            <li className="nav-list-item">Quick Links</li>
                            <li className="nav-list-item">News</li>
                            <li className="nav-list-item">About Us</li>
                            <li className="nav-list-item">Contact Us</li>
                        </ul>
                    </div>

                    <div className="nav-actions">
                        <Link to="/login" className="action-buttons-login">Log In</Link>
                        <Link to="/register" className="action-buttons">Register</Link>
                    </div>
                </nav>
            </div>

            <section className="section1">
                <div className="hero">
                    <div className="hero-texts">
                        <p className="hero-text-1">Unlock Your Future: <br />The Algorithm National <br />Scholarship Examination</p>
                        <p className="hero-text-2">Sharpen Your Skills, Rise to the Challenge - Compete for Your Future Success</p>
                    </div>
                </div>
            </section>

            <section className="section2">
                <span className="section2-title">Stay informed and Never Miss <br />any Update</span>
                <span className="section2-subtitle">Keep up with the latest news, announcements and updates from The Algorithm National Competition by subscribing to our Newsletter. Be the first to know about registration dates, examination schedules, results, admissions, and other information.</span>

                <div className="section2-container">
                    <input type="email" name="email" placeholder="Enter your Email" className="section2-email" />
                    <button className="section2-button">Get Started</button>
                </div>
            </section>

            <footer>
                <div>
                    <div className="footer-logo">
                        <img src={logo} alt="" className="footer-logo-image" />
                    </div>
                    <span className="motto">Enhancing Academic <br />Excellence</span>
                </div>

                <div>
                    <span className="contact">Contact us</span>
                    <span>Email: info@thealgorithm.com</span>
                    <span>Phone: +2348105772774 +2349022439482</span>
                </div>
            </footer>
        </div>
    );
}

export default Homepage;
