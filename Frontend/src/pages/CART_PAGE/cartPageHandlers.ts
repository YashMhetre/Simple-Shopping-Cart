import { toast }                                              from 'react-toastify';
import { CartItem, CartPageHandlersProps, CartPageHandlers }  from '../../types';

export const useCartPageHandlers = ({
  cart,
  clearCart,
}: CartPageHandlersProps): CartPageHandlers => {

  const handleClearCart = (): void => {
    if (cart.length > 0) 
    {
      clearCart();
      toast.warning('Cart cleared!', {
        position: "top-right",
        autoClose: 1000,
      });
    }
  };

  return {
    handleClearCart,
  };
};