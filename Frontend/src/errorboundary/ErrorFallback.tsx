import React from "react";
import { useNavigate } from "react-router-dom";
import { ErrorFallbackProps } from "../types";
import { Link } from "react-router-dom";

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error, resetError, message }) => {

  const handleGoHome = () => {
    if (resetError) resetError();
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <div className="alert alert-danger shadow-sm rounded-3 p-4">
            <h4 className="alert-heading">
              <i className="bi bi-exclamation-triangle-fill me-2"></i>
              {message || "Oops! Something went wrong"}
            </h4>
            {error && (
              <pre className="text-muted small mt-3">{error.message}</pre>
            )}
            <hr />
            <Link to="/"
              className="btn btn-primary"
              onClick={handleGoHome}
            >
              Go to Home Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorFallback;