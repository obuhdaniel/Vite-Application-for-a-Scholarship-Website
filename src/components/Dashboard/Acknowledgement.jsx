import React from "react";
import DashboardLayout from "./DashboardLayout";
import './styles/acknowledgment.css'; 

const Acknowledgement = () => {
    return(
        <DashboardLayout>
        <div className="form-container">
          <div className="top">
            <h3>Acknowledgement</h3>
            <p>
              Application Status: <span className="complete">Complete</span>
            </p>
          </div>
          <form className="institution-form ack">
           
           <h2>Congratulations, your Application has been Completed Successfully </h2>

           <h4>Click the link below to download your Acknowledgement Card</h4>
          
            <button type="submit" className="submit-button">
              Download Acknowledgement Card
            </button>
          </form>
        </div>
        </DashboardLayout>
    );
}

export default Acknowledgement;