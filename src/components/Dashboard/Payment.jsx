import React, {useState, useEffect} from 'react';
import './Payment.css';
import DashboardLayout from './DashboardLayout';
import { useAuth } from '../Security/AuthContext';

import { axiosInstance } from '../../api/api';

const Payment = ({ paymentDetails, error }) => {
  if (error) return <div className="error">{error}</div>;

  if (!paymentDetails) return <div className="loading">Loading...</div>;

  return (
    <div className="payment">
      <div className="top">
        <h3>Make Payment</h3>
        <p>Application Status: <span className="pending">Pending</span></p>
      </div>
      <div className="payment-details">
        <div className="payment-details-item"><span>Applicant ID:</span> <span>{paymentDetails.applicationNumber}</span></div>
        <div className="payment-details-item"><span>Student Name:</span> <span>{paymentDetails.fullName}</span></div>
        <div className="payment-details-item"><span>Payment Amount:</span> <span>{paymentDetails.amount}</span></div>
        <div className="payment-details-item"><span>Payment Method:</span> <span>Paystack</span></div>
        <div className="payment-details-item"><span>Payment Status:</span> <span className={paymentDetails.status.toLowerCase()}>{paymentDetails.status}</span></div>
      </div>
      <a href="https://paystack.com/pay/national-competion" className="pay-button">Pay with Paystack </a>
    </div>
  );
};
export default Payment;
