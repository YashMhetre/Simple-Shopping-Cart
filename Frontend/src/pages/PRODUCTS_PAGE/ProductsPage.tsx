import { useState, useEffect } from 'react';
import { useProductsPageHandlers } from './productsPageHandlers';
import ProductsPageView from './ProductsPageView';
import ProductLoadingState from './ProductLoadingState';
import ErrorState from './ErrorState';
import { Product } from '../../types';

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const { loadProducts, searchProducts } = useProductsPageHandlers({
    setProducts,
    setLoading,
    setError
  });

  useEffect(() => {
    loadProducts();
  }, []);

  // Handle search input change
  const handleSearchChange = (query: string) => {
    setSearchQuery(query);

    if (query.trim() !== null) {
      searchProducts(query);
    } 
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    loadProducts();
  };

  if (loading) {
    return <ProductLoadingState />;
  }

  if (error) {
    return <ErrorState error={error} />;
  }

  return (
    <>
      <ProductsPageView 
        products={products} 
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        onClearSearch={handleClearSearch}
      />
    </>
  );
}