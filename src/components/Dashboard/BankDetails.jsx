import React, { useState, useEffect } from "react";
import DashboardLayout from "./DashboardLayout";
import { axiosInstance } from "../../api/api";

const BankDetails = () => {
  const [bankDetails, setBankDetails] = useState({
    bankName: "",
    accountNumber: "",
    
  });

  const handleChange = (e) => {
    setBankDetails({ ...bankDetails, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const response = axiosInstance.post("/users/bank", bankDetails, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    

    window.location.href = "/user/acknowledgement";

    console.log(response.data.message);
  };
  return (
    <DashboardLayout>
      <div className="form-container">
        <div className="top">
          <h3>BanK Details</h3>
          <p>
            Application Status: <span className="pending">Pending</span>
          </p>
        </div>
        <form className="institution-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Bank Name</label>
            <select 
              id="bankName"
              name="bankName"
              value={bankDetails.bankName}
              onChange={handleChange}
            >
              <option value="" disabled selected>
                Select Bank
              </option>
              <option value="citibank-nigeria-limited">
                CITIBANK NIGERIA LIMITED
              </option>
              <option value="ecobank-nigeria-limited">
                ECOBANK NIGERIA LIMITED
              </option>
              <option value="heritage-bank-plc">HERITAGE BANK PLC</option>
              <option value="globus-bank-limited">GLOBUS BANK LIMITED</option>
              <option value="keystone-bank-limited">
                KEYSTONE BANK LIMITED
              </option>
              <option value="polaris-bank-limited">POLARIS BANK LIMITED</option>
              <option value="stanbic-ibtc-bank-limited">
                STANBIC IBTC BANK LIMITED
              </option>
              <option value="standard-chartered-bank-limited">
                STANDARD CHARTERED BANK LIMITED
              </option>
              <option value="sterling-bank-limited">
                STERLING BANK LIMITED
              </option>
              <option value="titan-trust-bank-limited">
                TITAN TRUST BANK LIMITED
              </option>
              <option value="union-bank-of-nigeria-plc">
                UNION BANK OF NIGERIA PLC
              </option>
              <option value="unity-bank-plc">UNITY BANK PLC</option>
              <option value="wema-bank-plc">WEMA BANK PLC</option>
              <option value="premium-trust-bank-limited">
                PREMIUM TRUST BANK LIMITED
              </option>
              <option value="optimus-bank-limited">OPTIMUS BANK LIMITED</option>
              <option value="providus-bank-limited">
                PROVIDUS BANK LIMITED
              </option>
              <option value="parallex-bank-limited">
                PARALLEX BANK LIMITED
              </option>
              <option value="suntrust-bank-nigeria-limited">
                SUNTRUST BANK NIGERIA LIMITED
              </option>
              <option value="signature-bank-limited">
                SIGNATURE BANK LIMITED
              </option>
            </select>
          </div>

          <div className="form-group">
            <label>Account Name</label>
            <input type="text" value="James Deo" disabled  />
          </div>

          <div className="form-group">
            <label>Account Number</label>
            <input type="text" placeholder="Enter Your Account Number" 
              id="accountNumber"
              name="accountNumber"
              value={bankDetails.accountNumber}
              onChange={handleChange}
            
            />
          </div>

          <div className="form-group">
            <label>Swift Code</label>
            <input type="text" placeholder="Enter Your Bank Swift Code" />
          </div>

          <button type="submit" className="submit-button">
            Save and Continue
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default BankDetails;
