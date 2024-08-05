import React from 'react';
import './styles/about.css'; // Import the CSS file for styling

import Header from './Header';

const AboutSection = () => {
  return (
    <>

    <Header/>
    <section className="about-section">
      <div className="about-container">
        <h2 className="about-title">The Algorithm National Competition</h2>
        <p className="about-intro">
          <strong>CALL FOR APPLICATION FOR 2024 WINTER EDITION OF THE ALGORITHM NATIONAL COMPETITION FOR UNDERGRADUATE!</strong>
        </p>
        <p className="about-description">
          THE ALGORITHM NATIONAL COMPETITION (ANC) is a premier competition for undergraduate college students in Nigeria. The ANC takes place biannually with both summer and winter editions, offering a platform for students to showcase their problem-solving skills and analytical thinking.
        </p>
        
        <h3 className="section-title">Method of Application</h3>
        <p className="application-details">
          All qualified candidates are advised to log on to <a href="http://www.thealgorithm.com" target="_blank" rel="noopener noreferrer">www.thealgorithm.com</a> to register.
        </p>
        
        <h3 className="section-title">Application Criteria</h3>
        <ul className="criteria-list">
          <li>Applicant must be a registered full-time student of a Nigerian Tertiary Institution.</li>
          <li>Must be intelligent and focused.</li>
        </ul>
        <p className="contact-info">
          For more information, call <strong>0813 580 9353</strong> or <strong>0902 277 6661</strong>.
        </p>
        <p className="registration-dates">
          Registration portal will be opened from <strong>1st September to 31st October 2024</strong>.
        </p>
        
        <h3 className="section-title">Information Overview</h3>
        <p className="overview-description">
          ANC is a 50-question, 60-minute multiple-choice examination designed for students in tertiary institutions. It aims to promote the development and enhancement of problem-solving skills. The competition is administered nationwide on <strong>May 22nd</strong> for the summer edition and <strong>September 22nd</strong> for the winter edition each year.
        </p>
        <p className="overview-description">
          This competition provides an opportunity for undergraduates to develop a positive attitude towards analytical thinking that can assist in their future careers.
        </p>
        
        <h3 className="section-title">Registration Deadlines and Competition Dates</h3>
        <ul className="dates-list">
          <li>Registration starts on April 1st for the summer edition and August 1st for the winter edition.</li>
          <li>Registration deadline: April 30th for the summer edition and August 31st for the winter edition.</li>
          <li>Competition date: May 22nd and September 22nd.</li>
        </ul>

        <h3 className="section-title">The Algorithm Competition Problems and Solutions</h3>
        <p className="resources-info">
          The ALGORITHM Competition Problems and Solutions are now available for download. Follow the links below to access the PDF files.
        </p>
        
        <h3 className="section-title">Preparing for the Algorithm</h3>
        <p className="preparation-info">
          The ALGORITHM Competition covers a range of material in undergraduate general knowledge, including aptitude tests.
        </p>
      </div>
    </section>

    </>
  );
};

export default AboutSection;
