import React from "react";
import DashboardLayout from "./DashboardLayout";

const PersonalInfo = () => {
  return (
    <DashboardLayout>
      <div className="form-container">
        <h2 className="form-title">Personal Information</h2>
        <form className="personal-form">
          <div className="form-group">
            <label>Applicant ID</label>
            <input type="text" value="DSBSB/2024/35841" disabled />
          </div>
          <div className="form-group">
            <label>Surname (Lastname)</label>
            <input type="text" value="lolo" />
          </div>
          <div className="form-group">
            <label>First Name</label>
            <input type="text" value="lolo" />
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
            <input type="email" value="lolo@gmail.com" />
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
          <div className="form-group passport-upload">
            <label>Upload Passport</label>
            <button type="button">Upload Passport</button>
          </div>
          <div className="form-group status">
            <span>Application Status: </span>
            <span className="pending">Pending</span>
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
