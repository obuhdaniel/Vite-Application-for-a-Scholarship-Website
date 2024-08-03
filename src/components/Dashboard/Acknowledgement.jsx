import React from "react";
import DashboardLayout from "./DashboardLayout";
import './styles/acknowledgment.css'; 

import jsPDF from "jspdf";

const Acknowledgement = () => {
    const handleDownload = () => {
        const doc = new jsPDF();
    
        doc.text("Acknowledgment Form", 10, 10);
        doc.text("Please review and acknowledge the information below:", 10, 20);
        doc.text("User Name: Obuh Daniel", 10, 30);
        doc.text("Email: Dano@g.com", 10, 40);
        doc.text("Date: 12-22-3445", 10, 50);
        doc.text("Signature: obuh", 10, 60);
    
        doc.save('acknowledgment-form.pdf');
      };
    
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
          
            <button type="submit" className="submit-button" onClick={handleDownload}>
              Download Acknowledgement Card
            </button>
          </form>
        </div>
        </DashboardLayout>
    );
}

export default Acknowledgement;