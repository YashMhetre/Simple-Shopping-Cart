import React                 from 'react';
import { LoadingStateProps } from '../../types';

const LoadingState: React.FC<LoadingStateProps> = ({ isLoaded }) => {
  if (isLoaded) return null;

  return (
    <div className="text-center py-3">
      <div 
        className="spinner-border text-primary me-2" 
        role="status" 
        style={{width: '1rem', height: '1rem'}}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      <small className="text-muted">Loading Cart...</small>
    </div>
  );
};

export default LoadingState;