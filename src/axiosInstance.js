// src/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://thealgorithm.onrender.com/api/', // replace with your backend URL
  withCredentials: true, // This is crucial for handling cookies with the backend
});

// Optionally, you can set up interceptors for adding the token to headers

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // or sessionStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default axiosInstance;
