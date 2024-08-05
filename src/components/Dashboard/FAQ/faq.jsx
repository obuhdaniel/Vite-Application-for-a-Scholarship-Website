import React, { useState } from 'react';
import './faqsection.css'; // Import the CSS file for styling

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
        question: 'When is the ALGORITHM Competition?',
        answer: 'The ALGORITHM Competition is a bi-annual event. The summer session takes place on June 1st, while the winter session occurs on November 1st. These dates are set annually to accommodate different academic schedules and allow participants ample time to prepare for the competition.'
      },
      {
        question: 'When does registration open?',
        answer: 'Registration for the competition opens in two phases: for the summer session, it starts on April 1st, and for the winter session, it begins on September 1st. This allows participants to register well in advance of each competition date, ensuring they have sufficient time to complete all necessary preparations.'
      },
      {
        question: 'How do students register?',
        answer: 'Students interested in participating should visit our official website at www.thealgorithm.com. The registration process is straightforward and requires the completion of an online form. Be sure to provide accurate information about your academic status and contact details to facilitate a smooth registration process.'
      },
      {
        question: 'I have a bachelor’s degree. May I participate?',
        answer: 'Typically, the ALGORITHM Competition is restricted to undergraduate students who are currently enrolled in any course at a Nigerian university. Individuals with a bachelor’s degree are not eligible to participate, as the competition is specifically tailored for undergraduates still pursuing their degrees.'
      },
      {
        question: 'May I participate in the ALGORITHM Competition without an association to an institution?',
        answer: 'No, participation is limited to those who are regularly enrolled in an undergraduate institution in Nigeria. Proof of current enrollment at a recognized Nigerian university is required for eligibility. This rule ensures that all participants are part of an academic institution and have the relevant background needed for the competition.'
      },
      {
        question: 'I am a degree candidate at one institution but temporarily at another. May I participate?',
        answer: 'Yes, you are eligible to participate. If you are a degree candidate at one institution but temporarily studying or residing at another, you can choose to compete using either institution. Just ensure that you meet the eligibility criteria for the institution you select for the competition.'
      },
      {
        question: 'Is there any limit to which I participate?',
        answer: 'There is no specific limit to the number of times you can participate in the competition as long as you continue to meet the eligibility requirements. Participants can take part in multiple sessions across different years, provided they are still undergraduates at a Nigerian institution during each competition.'
      },
      {
        question: 'I am a foreign student who is currently enrolled in a Nigerian institution. May I participate?',
        answer: 'Yes, foreign students who are currently enrolled in a Nigerian institution are eligible to participate in the ALGORITHM Competition. As long as you are a student at a recognized Nigerian university, your nationality does not affect your eligibility.'
      },
      {
        question: 'I am regularly enrolled in a Nigerian institution, but I am taking a year off (deferment). May I participate?',
        answer: 'Yes, if you are currently taking a year off or on deferment from your studies at a Nigerian institution, you are still eligible to participate. The competition is open to all regularly enrolled students, including those who are temporarily not attending classes but are still officially registered at their institution.'
      }
  ];

  const toggleAnswer = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h1>FAQs for the ALGORITHM Competition</h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              {faq.question}
            </div>
            {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
