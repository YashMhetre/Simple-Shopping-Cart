import { useState } from 'react';
import { CheckoutFormData, CheckoutFormErrors, OrderDetails, UseCheckoutHandlerProps } from '../../types';
import { validateCheckoutForm } from '../../utils/validation';
import { checkoutOrder } from '../../services/api';
import { toast } from 'react-toastify';
import { handleFieldChange } from '../../utils/formatters';

export const useCheckoutHandlers = ({
  cart,
  getCartTotal,
  clearCart,
  onCancel
}: UseCheckoutHandlerProps) => {
  const [customerInfo, setCustomerInfo] = useState<CheckoutFormData>({
    name: '',
    email: '',
    address: '',
    city: '',
    pinCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const [formErrors, setFormErrors] = useState<CheckoutFormErrors>({});
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
  const [showOrderModal, setShowOrderModal] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    const formattedValue = handleFieldChange(fieldName, fieldValue);
    const updatedDataAfterTyping = { ...customerInfo, [fieldName]: formattedValue };

    setCustomerInfo(updatedDataAfterTyping);

    if (formErrors[fieldName as keyof CheckoutFormErrors]) {
      setFormErrors(prev => ({
        ...prev,
        [fieldName]: undefined
      }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    const updatedDataAfterTyping = { ...customerInfo, [fieldName]: fieldValue };
    const errors = validateCheckoutForm(updatedDataAfterTyping);

    if (errors[fieldName as keyof CheckoutFormErrors]) {
      setFormErrors(prev => ({
        ...prev,
        [fieldName]: errors[fieldName as keyof CheckoutFormErrors]
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const trimmedInfo: CheckoutFormData = {
      ...customerInfo,
      name: customerInfo.name.trim(),
      email: customerInfo.email.trim(),
      address: customerInfo.address.trim(),
      city: customerInfo.city.trim(),
      pinCode: customerInfo.pinCode.trim(),
      cardNumber: customerInfo.cardNumber.trim(),
      expiryDate: customerInfo.expiryDate.trim(),
      cvv: customerInfo.cvv.trim()
    };

    setCustomerInfo(trimmedInfo);

    const errors = validateCheckoutForm(trimmedInfo);
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      toast.error('Please fix the form errors before submitting');
      return;
    }

    setIsProcessing(true);

    try {
      const processingToast = toast.loading('Processing your order...');

      const orderData = {
        items: cart.map(item => ({
          productId: item.id,
          productName: item.name,
          quantity: item.quantity,
          itemTotal: item.price * item.quantity,
          imageUrl: item.imageUrl
        })),
        customerInfo: {
          name: trimmedInfo.name,
          email: trimmedInfo.email,
          address: trimmedInfo.address,
          city: trimmedInfo.city,
          pinCode: trimmedInfo.pinCode
        },
        subtotal: getCartTotal()
      };

      const result = await checkoutOrder(orderData);
      toast.dismiss(processingToast);

      if (result && typeof result === 'object' && 'success' in result && result.success) {
        if ('order' in result && result.order && typeof result.order === 'object') {
          const apiOrder = result.order as any;

          const orderDetailsData: OrderDetails = {
            customerInfo: apiOrder.customerInfo || orderData.customerInfo,
            items: orderData.items,
            subtotal: apiOrder.subtotal || orderData.subtotal,
            orderDate: apiOrder.timestamp || new Date().toISOString(),
            timestamp: apiOrder.timestamp,
            total: apiOrder.total,
            status: apiOrder.status,
            itemCount: apiOrder.itemCount
          };

          setOrderDetails(orderDetailsData);

          setTimeout(() => {
            setShowOrderModal(true);
          }, 100);

          toast.success('Order placed successfully!');
        } else {
          const orderDetailsData: OrderDetails = {
            customerInfo: orderData.customerInfo,
            items: orderData.items,
            subtotal: orderData.subtotal,
            orderDate: new Date().toISOString()
          };

          setOrderDetails(orderDetailsData);

          setTimeout(() => {
            setShowOrderModal(true);
          }, 100);

          toast.success('Order placed successfully!');
        }
      } else {
        toast.error('Order processed but confirmation not received');
      }
    } catch (error) {
      console.error('Order submission error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      toast.error(`Checkout failed: ${errorMessage}`);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleCloseModal = (): void => {
    setShowOrderModal(false);
    setOrderDetails(null);
    clearCart();
    onCancel();
  };

  return {
    customerInfo,
    formErrors,
    isProcessing,
    orderDetails,
    showOrderModal,
    handleInputChange,
    handleBlur,
    handleSubmit,
    handleCloseModal
  };
};