import React from 'react';
import { ProductLoadingStateProps } from '../../types';

const ProductLoadingState: React.FC<ProductLoadingStateProps> = ({ isSearching = false }) => {
  return (
    <div className="text-center py-5">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <p className="mt-3 text-muted">
        {isSearching ? 'Searching products...' : 'Loading products...'}
      </p>
    </div>
  );
};

export default ProductLoadingState;