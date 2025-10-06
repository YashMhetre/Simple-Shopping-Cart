import React from 'react';
import { Product, ProductCardViewProps } from '../../types';

const ProductCardView: React.FC<ProductCardViewProps> = ({ product, onAddToCart }) => {
  return (
    <div className="card h-100 product-card">
      <img 
        src={product.imageUrl} 
        alt={product.name}
        className="card-img-top"
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text text-muted flex-grow-1">{product.description}</p>
        <div className="d-flex justify-content-between align-items-center">
          <span className="h5 mb-0 text-primary">₹{product.price}</span>
          <button 
            className="btn btn-primary"
            onClick={onAddToCart}
          >
            <i className="bi bi-cart-plus me-1"></i>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCardView;
