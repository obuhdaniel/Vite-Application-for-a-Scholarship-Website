import React, { useState } from "react";
import "./styles/index.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import FAQSection from "./Dashboard/FAQ/faq";
import Header from "./Header";
import Footer from "./Footer";

const Homepage = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      // Handle the email submission logic here (e.g., API call)
      console.log("Email submitted:", email);
      setError("");
      setEmail("");
    } else {
      setError("Please enter a valid email address");
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
  return (

    <>   <Header/> <div>
      

      <section className="hero-section">
        <div className="hero">
          <div className="hero-texts">
            <h1 className="hero-text-1">
              Unlock Your Future: The Algorithm National Scholarship Examination
            </h1>
            <p className="hero-text-2">
              Sharpen Your Skills, Rise to the Challenge - Compete for Your
              Future Success
            </p>
          </div>
        </div>
      </section>

      <section className="competition-info">
        <div className="info-container">
          <h2 className="info-title">Join the Algorithm National Competition</h2>
          <p className="info-description">
            Interested aspirants are invited to become a part of the ALGORITHM NATIONAL COMPETITION. The selected students will receive an award amount of <strong>₦50,000</strong> each.
          </p>
          
          <div className="brief-description">
            <h3>Brief Description</h3>
            <ul>
              <li><strong>Organization:</strong> SMATLAB360</li>
              <li><strong>Department:</strong> N/A</li>
              <li><strong>Course Level:</strong> Undergraduate</li>
              <li><strong>Award:</strong> ₦50,000</li>
              <li><strong>Access Mode:</strong> Online</li>
              <li><strong>Number of Awards:</strong> N/A</li>
              <li><strong>Nationality:</strong> Nigeria</li>
            </ul>
          </div>
        </div>
      </section>

      <FAQSection/>

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

      
    </div>
    <Footer/>

    </>

  );
};

export default Homepage;
