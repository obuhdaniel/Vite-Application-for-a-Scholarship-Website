// src/components/PaymentPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PaymentPage = () => {
  const navigate = useNavigate();

  const handlePayment = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/payment/initialize', {
        email: 'user@example.com', // Replace with the actual user email
        amount: 5000, // Replace with the actual amount
      });
      const { authorization_url } = response.data;
      window.location.href = authorization_url;
    } catch (error) {
      console.error('Payment Initialization Error:', error);
    }
  };

  return (
    <div className="payment-page">
      <h2>Complete Your Payment</h2>
      <p>Click the button below to proceed to Paystack for payment.</p>
      <button onClick={handlePayment}>Pay with Paystack</button>
    </div>
  );
};

export default PaymentPage;
