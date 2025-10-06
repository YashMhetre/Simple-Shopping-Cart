import React from 'react';
import { Link } from 'react-router-dom';

const EmptyCartView: React.FC = () => {
  return (
    <div className="text-center py-5">
      <div className="mb-4">
        <i className="bi bi-cart-x display-1 text-muted"></i>
      </div>
      <h2 className="h3 mb-3">Your cart is empty</h2>
      <p className="text-muted mb-4">Looks like you haven't added any items to your cart yet.</p>
      <Link to="/products" className="btn btn-primary">
        <i className="bi bi-arrow-left me-2"></i>
        Continue Shopping
      </Link>
    </div>
  );
};

export default EmptyCartView;