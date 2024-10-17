import React from 'react';

const SubmissionSuccess = ({ name, email, message }) => {
  return (
    <div>
      <h2 className="text-primary text-center">Thank you{name}!</h2>
      <p className="text-secondary text-center">Your message has been sent.</p>
      
    </div>
  );
};

export default SubmissionSuccess;
