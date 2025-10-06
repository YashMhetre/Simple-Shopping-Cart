import { CartItem } from './cartTypes';
import {OrderDetails } from './orderTypes';
import {ApiOrderResponse} from './apiTypes';

export interface CheckoutFormData {
  name: string;
  email: string;
  address: string;
  city: string;
  pinCode: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

export interface UseCheckoutHandlerProps {
  cart: any[];
  getCartTotal: () => number;
  clearCart: () => void;
  onCancel: () => void;
}

export interface CheckoutFormErrors {
  name?: string;
  email?: string;
  address?: string;
  city?: string;
  pinCode?: string;
  cardNumber?: string;
  expiryDate?: string;
  cvv?: string;
}

export interface CheckoutResponse {
  success: boolean;
  message?: string;
  order?: ApiOrderResponse;
  error?: string;
}

export interface CheckoutOrderData {
  items: Array<{
    productId: number;
    productName: string;
    quantity: number;
    itemTotal: number;
    imageUrl?: string;
  }>;
  customerInfo: {
    name: string;
    email: string;
    address: string;
    city: string;
    pinCode: string;
  };
  subtotal: number;
}

export interface CheckoutHandlersProps {
  customerInfo: CheckoutFormData;
  setCustomerInfo: React.Dispatch<React.SetStateAction<CheckoutFormData>>;
  formErrors: CheckoutFormErrors;
  setFormErrors: React.Dispatch<React.SetStateAction<CheckoutFormErrors>>;
  cart: CartItem[];
  getCartTotal: () => number;
  setIsProcessing: React.Dispatch<React.SetStateAction<boolean>>;
  setOrderDetails: React.Dispatch<React.SetStateAction<OrderDetails | null>>;
  setShowOrderModal: React.Dispatch<React.SetStateAction<boolean>>;
  clearCart: () => void;
}

export interface CheckoutFormViewProps {
  customerInfo: CheckoutFormData;
  formErrors: CheckoutFormErrors;
  isProcessing: boolean;
  getCartTotal: () => number;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onCancel: () => void;
}

export interface CheckoutFormProps {
  onCancel: () => void;
}
