// src/components/PaymentSuccess.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

const PaymentSuccess = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const reference = query.get('reference');

  return (
    <div className="payment-success">
      <h2>Payment Successful!</h2>
      <p>Thank you for your payment. Your transaction reference is {reference}.</p>
      <p>You can now proceed with your registration.</p>
    </div>
  );
};

export default PaymentSuccess;
