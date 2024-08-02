import React from "react";
import DashboardLayout from "./DashboardLayout";
import "./styles/institution.css";

const INstitutionalDetails = () => {
  return (
    <DashboardLayout>
      <div className="form-container">
        <div className="top">
          <h3>Institutional Details</h3>
          <p>
            Application Status: <span className="pending">Pending</span>
          </p>
        </div>
        <form className="institution-form">
          <div className="form-group">
            <label>Name of Institution</label>
            <select>
              <option value="" disabled selected>
                Select Institution
              </option>
              {/* Add institution options here */}
            </select>
          </div>
          <div className="form-group">
            <label>Faculty</label>
            <select>
              <option value="" disabled selected>
                Select Faculty
              </option>
              {/* Add faculty options here */}
            </select>
          </div>
          <div className="form-group">
            <label>Department</label>
            <select>
              <option value="" disabled selected>
                Select Department
              </option>
              {/* Add department options here */}
            </select>
          </div>
          <div className="form-group">
            <label>Level</label>
            <select>
              <option value="" disabled selected>
                Select Level
              </option>
              {/* Add level options here */}
            </select>
          </div>
          <div className="form-group">
            <label>Matric. No.</label>
            <input type="text" placeholder="Enter Matric No." />
          </div>
          <div className="form-group">
            <label>Degree Type</label>
            <select>
              <option value="" disabled selected>
                Select Degree
              </option>
              {/* Add degree options here */}
            </select>
          </div>
          <div className="form-group">
            <label>Year of Admission</label>
            <select>
              <option value="" disabled selected>
                Select Year
              </option>
              {/* Add year options here */}
            </select>
          </div>
          <div className="form-group">
            <label>Expected Grad. Year</label>
            <select>
              <option value="" disabled selected>
                Select Year
              </option>
              {/* Add year options here */}
            </select>
          </div>
          <div className="form-group">
            <label>Current Semester</label>
            <select>
              <option value="" disabled selected>
                Select Semester
              </option>
              {/* Add semester options here */}
            </select>
          </div>
          <div className="form-group">
            <label>CGPA</label>
            <input type="text" placeholder="Enter CGPA" />
          </div>
          <div className="form-group">
            <label>Jamb Registration No.</label>
            <input type="text" placeholder="Enter Jamb Reg No." />
          </div>
          <button type="submit" className="submit-button">
            Save and Continue
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default INstitutionalDetails;
