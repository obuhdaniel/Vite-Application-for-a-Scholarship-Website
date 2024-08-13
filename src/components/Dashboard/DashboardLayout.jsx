import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./DashboardLayout.css";
import logo from "../../assets/logo.png";
import { axiosInstance } from "../../api/api";

const DashboardLayout = ({ children }) => {
  const [paymentDetails, setPaymentDetails] = useState(null);
  const [error, setError] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    const fetchPaymentDetails = async () => {
      try {
        const response = await axiosInstance.get('users/pay');
        setPaymentDetails(response.data.paymentData);
        setError(null);
      } catch (err) {
        console.error('Error fetching payment details:', err.response ? err.response.data : err.message);
        setError('Failed to fetch payment details');
        setPaymentDetails(null);
      }
    };

    fetchPaymentDetails();
  }, []);

  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, { paymentDetails, error })
  );

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="dashboard">
      <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
        <button className="menu-icon" onClick={toggleSidebar}>&#9776;</button>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <h2 className="user-text">User Dashboard</h2>
        <nav>
          <ul>
            <li>
              <Link to="/user/payment">
                <button className="link-button">
                  <img
                    width="30"
                    height="30"
                    src="https://img.icons8.com/ios/50/FFFFFF/card-in-use.png"
                    alt="card-in-use"
                  />
                  Dashboard 
                </button>
              </Link>
            </li>
            <li>
              <Link to="/user/payment">
                <button className="link-button">
                  <img
                    width="30"
                    height="30"
                    src="https://img.icons8.com/ios/50/FFFFFF/card-in-use.png"
                    alt="card-in-use"
                  />
                  Payment
                </button>
              </Link>
            </li>
            <li>
              <Link to="/user/personal-info">
                <button className="link-button">
                  <img
                    width="30"
                    height="30"
                    src="https://img.icons8.com/external-smashingstocks-glyph-smashing-stocks/30/FFFFFF/external-Personal-Information-politics-smashingstocks-glyph-smashing-stocks.png"
                    alt="personal-info"
                  />
                  Personal Info
                </button>
              </Link>
            </li>
            <li>
              <Link to="/user/institution-details">
                <button className="link-button">
                  <img
                    width="30"
                    height="30"
                    src="https://img.icons8.com/ios-filled/30/FFFFFF/university.png"
                    alt="university"
                  />
                  Institution Details
                </button>
              </Link>
            </li>
            <li>
              <Link to="/user/bank-details">
                <button className="link-button">
                  <img
                    width="32"
                    height="32"
                    src="https://img.icons8.com/external-kmg-design-glyph-kmg-design/32/FFFFFF/external-withdraw-finance-2-kmg-design-glyph-kmg-design.png"
                    alt="bank-details"
                  />
                  Bank Details
                </button>
              </Link>
            </li>
            <li>
              <Link to="/user/acknowledgement">
                <button className="link-button">
                  <img
                    width="30"
                    height="30"
                    src="https://img.icons8.com/ios-filled/30/FFFFFF/document--v1.png"
                    alt="acknowledgement"
                  />
                  Acknowledgement
                </button>
              </Link>
            </li>
            <li>
              <Link to="/logout">
                <button className="link-button">
                  <img
                    width="30"
                    height="30"
                    src="https://img.icons8.com/pastel-glyph/30/FFFFFF/exit--v1.png"
                    alt="logout"
                  />
                  Logout
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="main-content">{childrenWithProps}</div>
    </div>
  );
};

export default DashboardLayout;
