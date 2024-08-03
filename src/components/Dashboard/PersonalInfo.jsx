import React, { useState } from "react";
import DashboardLayout from "./DashboardLayout";
import "./styles/personal-information.css";

const MAX_FILE_SIZE_MB = 0.5;
const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024; // Convert MB to bytes

const PersonalInfo = () => {
  const [imageSrc, setImageSrc] = useState("");
  const [base64Image, setBase64Image] = useState("");
  const [error, setError] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > MAX_FILE_SIZE_BYTES) {
        setError("File size exceeds 0.5 MB limit.");
        setImageSrc("");
        setBase64Image("");
      } else {
        setError("");
        const reader = new FileReader();
        reader.onload = (e) => {
          const base64String = e.target.result;
          setImageSrc(base64String);
          setBase64Image(base64String);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handleSave = () => {
    // Example: Saving base64Image to database or elsewhere
    console.log("Base64 Image:", base64Image);
    // Here you would typically make an API call to save base64Image
  };
  return (
    <DashboardLayout>
      <div className="form-container">
        <div className="top">
          <h3>Personal Information</h3>
          <p>
            Application Status: <span className="pending">Pending</span>
          </p>
        </div>
        <form className="personal-form">
          <div className="form-group">
            <label>Applicant ID</label>
            <input type="text" value="DSBSB/2024/35841" disabled />
          </div>
          <div className="form-group">
            <label>Surname (Lastname)</label>
            <input type="text" value="lolo" disabled />
          </div>
          <div className="form-group">
            <label>First Name</label>
            <input type="text" value="lolo" disabled />
          </div>
          <div className="form-group">
            <label>Middle Name</label>
            <input type="text" placeholder="Enter middle name" />
          </div>
          <div className="form-group">
            <label>Date of Birth</label>
            <input type="date" placeholder="mm/dd/yyyy" />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" placeholder="Enter your phone number" />
          </div>
          <div className="form-group">
            <label>Gender</label>
            <select>
              <option value="" disabled selected>
                Select gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" value="lolo@gmail.com" disabled />
          </div>
          <div className="form-group">
            <label>Address</label>
            <textarea placeholder="Enter your address here"></textarea>
          </div>
          <div className="form-group">
            <label>NIN</label>
            <input type="text" placeholder="Enter your NIN" />
          </div>
          <div className="form-group">
            <label>Local Government of Origin</label>
            <input
              type="text"
              placeholder="Enter your local government of origin"
            />
          </div>

          <div className="form-group ">
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
                <img
                  src={imageSrc}
                  className="passport"
                  alt="Uploaded Passport"
                />
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
    </DashboardLayout>
  );
};

export default PersonalInfo;
