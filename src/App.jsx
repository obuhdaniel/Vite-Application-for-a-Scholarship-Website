// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Homepage from './components/Homepage';
import LoginPage from './components/Login/Login';
import RegisterPage from './components/Register/Register';
import Applicant from './components/Dashboard/App';

import './index.css';



function App() {
  return (

   
      <Router>
      <Routes>
        
        
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/user" element={<Applicant />} />
        
        
        
      </Routes>
    </Router>
    
  );
}

export default App;
