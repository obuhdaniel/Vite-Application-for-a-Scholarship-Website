// src/components/ProfileForm.jsx
import React, { useState } from 'react';
import './ProfileForm.css'; // Create a CSS file for styling

const ProfileForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    address: '',
    examinationYear: '',
    educationLevel: '',
    photograph: null,
    certificates: null,
    otherDocuments: null,
    paymentStatus: 'Pending',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="profile-form">
      <h2>Complete Your Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="examinationYear">Examination Year:</label>
          <input
            type="text"
            id="examinationYear"
            name="examinationYear"
            value={formData.examinationYear}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="educationLevel">Education Level:</label>
          <input
            type="text"
            id="educationLevel"
            name="educationLevel"
            value={formData.educationLevel}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="photograph">Photograph:</label>
          <input
            type="file"
            id="photograph"
            name="photograph"
            accept="image/*"
            onChange={handleFileChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="certificates">Certificates:</label>
          <input
            type="file"
            id="certificates"
            name="certificates"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="otherDocuments">Other Documents:</label>
          <input
            type="file"
            id="otherDocuments"
            name="otherDocuments"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ProfileForm;
