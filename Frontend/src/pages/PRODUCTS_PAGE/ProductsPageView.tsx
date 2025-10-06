import React from 'react';
import ProductCard from '../../components/PRODUCT_CARD/ProductCard';
import { Product, ProductsPageViewProps } from '../../types';

const ProductsPageView: React.FC<ProductsPageViewProps> = ({ 
  products, 
  searchQuery, 
  onSearchChange, 
  onClearSearch 
}) => {
  return (
    <div>
      <div className="row mb-4 align-items-end">
        <div className="col-12 col-md-6">
          <h1 className="h2 mb-2">Our Products</h1>
          <p className="text-muted mb-0">Discover our amazing collection of products</p>
        </div>
        <div className="col-12 col-md-6 mt-3 mt-md-0">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search products by name or description"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
            />

            {/*  if the text that the user typed in the search bar exists then only the clear button appears  */}
            {searchQuery && (
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={onClearSearch}
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Search Results Info */}
      {searchQuery && (
        <div className="row mb-3">
          <div className="col-12">
            <p className="text-muted">
              {products.length > 0 
                ? `Found ${products.length} product(s) matching "${searchQuery}"`
                : `No products found matching "${searchQuery}"`
              }
            </p>
          </div>
        </div>
      )}

      {/* Products Grid */}
      <div className="row g-4">
        {products.map(product => (
          <div key={product.id} className="col-12 col-md-6 col-lg-4">
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* Empty State */}
      {products.length === 0 && !searchQuery && (
        <div className="text-center py-5">
          <h3>No products available</h3>
          <p className="text-muted">Please check back later for new products.</p>
        </div>
      )}
    </div>
  );
};

export default ProductsPageView;