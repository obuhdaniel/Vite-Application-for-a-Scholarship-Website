import React, { useState } from "react";
import DashboardLayout from "./DashboardLayout";
import "./styles/personal-information.css";

import axios from 'axios';
import { axiosInstance } from "../../api/api";

const PersonalInfo = ({ paymentDetails, error2 }) => {
  if (error2) return <div className="error">{error2}</div>;

  if (!paymentDetails) return <div className="loading">Loading...</div>;

  const getNameParts = (fullName) => {
    const parts = fullName.trim().split(' ');
    const surname = parts.length > 1 ? parts[0] : '';
    const firstName = parts.slice(1).join(' ');

    return { surname, firstName };
  };
  const { surname, firstName } = getNameParts(paymentDetails.fullName);

  const [image, setImage] = useState(null);
  const [imageSrc, setImageSrc] = useState("");
  const [error, setError] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 0.5 * 1024 * 1024) { // 0.5 MB limit
        setError("File size exceeds 0.5 MB limit.");
        setImage(null);
        setImageSrc("");
      } else {
        setError("");
        setImage(file);

        const reader = new FileReader();
        reader.onload = (e) => {
          setImageSrc(e.target.result);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handleSave = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('middleName', event.target.middleName.value);
    formData.append('dateOfBirth', event.target.dateOfBirth.value);
    formData.append('phoneNumber', event.target.phoneNumber.value);
    formData.append('address', event.target.address.value);
    formData.append('nin', event.target.nin.value);
    formData.append('stateOfOrigin', event.target.stateOfOrigin.value);
    formData.append('lgaOfOrigin', event.target.lgaOfOrigin.value);
    formData.append('passportPhoto', image); // Append the image file

    try {
      await axiosInstance.post('/users/info', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      window.location.href = "/user/institution-details";
      // Handle success, e.g., show a success message or redirect
    } catch (err) {
      setError('Error uploading file.');
      console.error(err);
    }
  };

  return (
    <div className="form-container">
      <div className="top">
        <h3>Personal Information</h3>
        <p>
          Application Status: <span className="pending">Pending</span>
        </p>
      </div>
      <form className="personal-form" onSubmit={handleSave}>
        <div className="form-group">
          <label>Applicant ID</label>
          <input type="text" value={paymentDetails.applicationNumber} disabled />
        </div>
        <div className="form-group">
          <label>Surname (Lastname)</label>
          <input type="text" value={surname} disabled />
        </div>
        <div className="form-group">
          <label>First Name</label>
          <input type="text" value={firstName} disabled />
        </div>
        <div className="form-group">
          <label>Middle Name</label>
          <input type="text" name="middleName" placeholder="Enter middle name" />
        </div>
        <div className="form-group">
          <label>Date of Birth</label>
          <input type="date" name="dateOfBirth" placeholder="mm/dd/yyyy" />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input type="tel" name="phoneNumber" placeholder="Enter your phone number" />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <select name="gender">
            <option value="" disabled defaultValue={""}>Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" value={paymentDetails.email} disabled />
        </div>
        <div className="form-group">
          <label>Address</label>
          <textarea name="address" placeholder="Enter your address here"></textarea>
        </div>
        <div className="form-group">
          <label>NIN</label>
          <input type="text" name="nin" placeholder="Enter your NIN" />
        </div>
        <div className="form-group">
          <label>State of Origin</label>
          <input type="text" name="stateOfOrigin" placeholder="Enter your State of origin" />
        </div>
        <div className="form-group">
          <label>Local Government of Origin</label>
          <input type="text" name="lgaOfOrigin" placeholder="Enter your local government of origin" />
        </div>

        <div className="form-group">
          <label htmlFor="passportUpload">Upload Passport</label>
          <input
            type="file"
            id="passportUpload"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />

          {imageSrc && (
            <div className="passport-upload">
              <img src={imageSrc} className="passport" alt="Uploaded Passport" />
              {error && <p className="error">{error}</p>}
            </div>
          )}
          <button
            type="button"
            onClick={() => document.getElementById("passportUpload").click()}
          >
            Upload Passport <span className="max">* MAX 0.5MB</span>
          </button>
        </div>

        <button type="submit" className="submit-button">
          Save and Continue
        </button>
      </form>
    </div>
  );
};

export default PersonalInfo;

