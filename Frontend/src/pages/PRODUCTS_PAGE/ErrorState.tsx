import React from 'react';
import { ErrorStateProps } from '../../types';

const ErrorState: React.FC<ErrorStateProps> = ({ error }) => {
  return (
    <div
      className="text-center"
      role="alert"
      style={{
        backgroundColor: "#ffe6eb",  
        border: "1px solid #ffb3c1", 
        color: "#a8324a",           
        padding: "1rem",
        borderRadius: "12px",
        maxWidth: "500px",
        margin: "1rem auto",
        boxShadow: "0 4px 10px rgba(0,0,0,0.05)"
      }}
    >
      <i className="bi bi-exclamation-triangle me-2"></i>
      <strong>{error}</strong>
      <div className="mt-2">
        <small style={{ color: "#7a1f33" }}>
          Make sure your backend is running on port 8080
        </small>
      </div>
    </div>
  );
};

export default ErrorState;
