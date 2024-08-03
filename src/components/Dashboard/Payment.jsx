import React from 'react';
import './Payment.css';
import DashboardLayout from './DashboardLayout';

const Payment = () => {
  return (

    <DashboardLayout>
       <div className="payment">


        <div className="top">
          <h3>Make Payment</h3>
          <p>Application Status: <span className="pending">Pending</span></p>
        </div>
      <div className="payment-details">

        <div className="payment-details-item"><span>Applicant ID:</span> <span>DSB/2024/12345</span> </div>
        <div className="payment-details-item"><span>Student Name:</span> <span>John Doe</span> </div>
        <div className="payment-details-item"><span>Payment Amount:</span> <span>N800</span> </div>
        <div className="payment-details-item"><span>Payment Method:</span> <span>Paystack</span> </div>
        <div className="payment-details-item"><span>Payment Status:</span> <span className="pending">Pending</span> </div>
        
      </div>
      <a href="https://paystack.com/pay/national-competion" className="pay-button">Pay with Paystack </a>
    </div>
    </DashboardLayout>
   
  );
};

export default Payment;
