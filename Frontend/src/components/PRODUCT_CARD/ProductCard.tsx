import React from 'react';
import { ProductCardProps } from '../../types';
import { useProductCardHandlers } from './productCardHandler';
import ProductCardView from './ProductCardView';

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { handleAddToCart } = useProductCardHandlers(product);

  return (
    <ProductCardView 
      product={product}
      onAddToCart={handleAddToCart}
    />
  );
};

export default ProductCard;