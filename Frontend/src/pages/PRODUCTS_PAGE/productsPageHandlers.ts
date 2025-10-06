import { fetchProducts, searchProducts } from '../../services/api';
import { Product, ProductsPageHandlersProps } from '../../types';
import { useCallback, useRef } from 'react';

export const useProductsPageHandlers = ({
  setProducts,
  setLoading,
  setError
}: ProductsPageHandlersProps) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const loadProducts = async (): Promise<void> => {
    try {
      setLoading(true);
      setError(null);
      
      const productsData = await fetchProducts();
      setProducts(productsData);
      
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to load products. Please check if the backend server is running.';
      
      setError(errorMessage);
      console.error('Error loading products:', err);
    } finally {
      setLoading(false);
    }
  };

  const searchProductsHandler = useCallback((query: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(async () => {
      if (query.trim() === '') {
        await loadProducts();
        return;
      }
      
      try {
        setLoading(true);
        setError(null);
        
        const searchResults = await searchProducts(query);
        setProducts(searchResults);
        
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to search products. Please try again.';
        
        setError(errorMessage);
        console.error('Error searching products:', err);
      } finally {
        setLoading(false);
      }
    }, 700);
  }, [setProducts, setLoading, setError]);

  const cancelSearch = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  return {
    loadProducts,
    searchProducts: searchProductsHandler,
    cancelSearch
  };
};