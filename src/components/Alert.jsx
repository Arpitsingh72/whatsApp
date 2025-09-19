import React from 'react';

const Alert = ({ message, type = 'error' }) => {
  if (!message) return null;
  return (
    <div className={`alert ${type}`}>
      {message}
    </div>
  );
};

export default Alert;
