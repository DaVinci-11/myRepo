import React from 'react';

const SubmissionSuccess = ({ name, email, message }) => {
  return (
    <div>
      <h2>Thank you{name}!</h2>
      <p>Your message has been sent.</p>
      
    </div>
  );
};

export default SubmissionSuccess;
