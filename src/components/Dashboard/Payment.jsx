import React from 'react';
import './Payment.css';

const Payment = () => {
  return (
    <div className="payment">
      <h1>Make Payment</h1>
      <div className="payment-details">
        <p>Applicant ID: DSB/2024/12345</p>
        <p>Student Name: John Doe</p>
        <p>Payment Amount: N800</p>
        <p>Payment Status: <span className="status-pending">Pending</span></p>
      </div>
      <button className="pay-button">Pay with Paystack</button>
    </div>
  );
};

export default Payment;
