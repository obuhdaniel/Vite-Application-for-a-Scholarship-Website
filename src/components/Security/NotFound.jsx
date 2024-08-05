import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaExclamationTriangle } from 'react-icons/fa'; // Optional: Add icons for better visual appeal

function NotFound() {
  return (
    <div style={styles.container}>
      <div style={styles.iconContainer}>
        <FaExclamationTriangle style={styles.icon} />
      </div>
      <h1 style={styles.title}>404 - Page Not Found</h1>
      <p style={styles.message}>Sorry, the page you are looking for does not exist.</p>
      <Link to="/" style={styles.link}>
        <FaHome style={styles.homeIcon} />
        Go to Home
      </Link>
      <p style={styles.info}>If you think this is an error, please contact support.</p>
    </div>
  );
}

// Define styles for the NotFound component
const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
    backgroundColor: '#f8f9fa', // Light background color for better readability
    color: '#343a40', // Dark text color
    minHeight: '100vh', // Full height of the viewport
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  iconContainer: {
    fontSize: '100px',
    color: '#dc3545', // Red color for the warning icon
    marginBottom: '20px',
  },
  icon: {
    fontSize: '100px',
  },
  title: {
    fontSize: '3rem',
    margin: '10px 0',
    fontWeight: 'bold',
  },
  message: {
    fontSize: '1.25rem',
    marginBottom: '20px',
  },
  link: {
    display: 'inline-flex',
    alignItems: 'center',
    fontSize: '1.25rem',
    color: '#007bff', // Blue color for the link
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  homeIcon: {
    marginRight: '8px',
  },
  info: {
    marginTop: '20px',
    fontSize: '1rem',
    color: '#6c757d', // Gray color for additional information
  },
};

export default NotFound;
