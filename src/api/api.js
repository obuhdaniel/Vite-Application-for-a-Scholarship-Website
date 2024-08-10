import axios from 'axios';

export const fetchPaymentDetails = async (userId) => {
  try {
    const response = await axios.get('https://thealgorithm.onrender.com/api/users/pay', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('authToken')}`
      },
      
     
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching payment details:', error);
    throw error;
  }
};
export const axiosInstance = axios.create({
  baseURL: 'https://thealgorithm.onrender.com/api/', // Replace with your backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include the token in headers
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const initiatePayment = async (amount) => {
  try {
    const response = await axiosInstance.post('/pay', { amount });
    console.log('Payment initiated successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error initiating payment:', error.response ? error.response.data : error.message);
    throw error;
  }
};