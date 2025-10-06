import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectCartItems, selectCartTotal, clearCart } from '../../store/slices/cartSlice';
import { CheckoutFormProps } from '../../types';
import { useCheckoutHandlers } from './checkoutFormHandlers';
import CheckoutFormView from './CheckoutFormView';
import OrderModal from '../ORDER_MODAL/OrderModal';

const CheckoutForm: React.FC<CheckoutFormProps> = ({ onCancel }) => {

  const dispatch  = useAppDispatch();
  const cart      = useAppSelector(selectCartItems);
  const cartTotal = useAppSelector(selectCartTotal);

  const {
    customerInfo,
    formErrors,
    isProcessing,
    orderDetails,
    showOrderModal,
    handleInputChange,
    handleBlur,
    handleSubmit,
    handleCloseModal
  } = useCheckoutHandlers({
    cart,
    getCartTotal: () => cartTotal,
    clearCart: () => dispatch(clearCart()),
    onCancel
  });

  return (
    <>
      <OrderModal
        isOpen={showOrderModal}
        onClose={handleCloseModal}
        orderData={orderDetails}
      />

      <CheckoutFormView
        customerInfo={customerInfo}
        formErrors={formErrors}
        isProcessing={isProcessing}
        getCartTotal={() => cartTotal}
        onInputChange={handleInputChange}
        onBlur={handleBlur}
        onSubmit={handleSubmit}
        onCancel={onCancel}
      />
    </>
  );
};

export default CheckoutForm;