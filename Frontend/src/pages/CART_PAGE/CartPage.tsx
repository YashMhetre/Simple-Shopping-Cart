import React, { useState }                              from 'react';
import { useAppDispatch, useAppSelector }               from '../../store/hooks';
import { selectCartItems, selectCartTotal, clearCart }  from '../../store/slices/cartSlice';
import { useCartPageHandlers }                          from './cartPageHandlers';
import CartPageView                                     from './CartPageView';
import EmptyCartView                                    from './EmptyCartView';

const CartPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(selectCartItems);
  const cartTotal = useAppSelector(selectCartTotal);
  const [showCheckout, setShowCheckout] = useState<boolean>(false);

  const getCartTotal = () => cartTotal;

  const { handleClearCart } = useCartPageHandlers({
    cart,
    clearCart: () => dispatch(clearCart()),
    getCartTotal,
  });

  if (cart.length === 0) {
    return <EmptyCartView />;
  }

  return (
    <CartPageView
      cart={cart}
      showCheckout={showCheckout}
      setShowCheckout={setShowCheckout}
      getCartTotal={getCartTotal}
      onClearCart={handleClearCart}
    />
  );
};

export default CartPage;