import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DashboardLayout from './DashboardLayout';
import Payment from './Payment';
// import PersonalInfo from './PersonalInfo';
// import InstitutionDetails from './InstitutionalDetails';
// import BankDetails from './BankDetails';
// import Acknowledgement from './Acknowledgement';

const Applicant = () => {
  return (
    <Router>
      <DashboardLayout>
        
          <Route path="/payment" component={Payment} />
          {/* <Route path="/personal-info" component={PersonalInfo} />
          <Route path="/institution-details" component={InstitutionDetails} />
          <Route path="/bank-details" component={BankDetails} />
          <Route path="/acknowledgement" component={Acknowledgement} />
          <Route path="/" component={Payment} />  */}
        
      </DashboardLayout>
    </Router>
  );
};

export default Applicant;
