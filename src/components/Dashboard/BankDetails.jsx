import React from "react";
import DashboardLayout from "./DashboardLayout";

const BankDetails = () => {
    return(
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
              <label>BanK Name</label>
              <select>
                <option value="" disabled selected>
                  Select Institution
                </option>
                {/* Add institution options here */}
              </select>
            </div>
            
            <div className="form-group">
              <label>Account Name</label>
              <input type="text" value="James Deo" disabled/>
            </div>

            <div className="form-group">
              <label>Account Number</label>
              <input type="text" placeholder="Enter Your Account Number"/>
            </div>

            <div className="form-group">
              <label>Swift Code</label>
              <input type="text" placeholder="Enter Your Bank Swift Code"/>
            </div>
          
            <button type="submit" className="submit-button">
              Save and Continue
            </button>
          </form>
        </div>
      </DashboardLayout>
    );
}

export default BankDetails;