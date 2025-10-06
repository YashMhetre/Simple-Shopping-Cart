import { toast } from 'react-toastify';
import { useAppDispatch } from '../../store/hooks';
import { addToCart } from '../../store/slices/cartSlice';
import { Product } from '../../types';

export const useProductCardHandlers = (product: Product) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = (): void => {
    dispatch(addToCart(product));
    toast.success(`${product.name} added to cart!`, {
      position: 'top-right',
      autoClose: 1000,
    });
  };

  return { handleAddToCart };
};