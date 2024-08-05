import React, { useState } from 'react';
import './styles/contact.css'; 
import Header from './Header';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required.';
    if (!formData.email) newErrors.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid.';
    if (!formData.message) newErrors.message = 'Message is required.';
    return newErrors;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      // Here you would typically send formData to your server or API
      setFormData({ name: '', email: '', message: '' });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <>

    <Header />
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Contact Us</h2>
        {submitted ? (
          <div className="contact-success">
            <h3>Thank you for reaching out!</h3>
            <p>We have received your message and will get back to you shortly.</p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
              />
              {errors.message && <span className="error">{errors.message}</span>}
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        )}

        <div className="contact-info">
          <h3>Contact Information</h3>
          <p><strong>Address:</strong> 1234 Algorithm Lane, Code City, NG</p>
          <p><strong>Phone:</strong> +234 813 580 9353</p>
          <p><strong>Email:</strong> <a href="mailto:info@thealgorithm.com">info@thealgorithm.com</a></p>
        </div>
      </div>
    </section>

    </>
  );
};

export default ContactUs;
