import { CartItem, CartExportData } from './cartTypes';
import { Product } from './productTypes';

export interface CartStoreType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartItemsCount: () => number;
  clearCartStorage: () => void;
  exportCartData: () => CartExportData;
  isLoaded: boolean;
}

export interface CartProviderProps {
  children: React.ReactNode;
}

export interface CartStoreState {
  items: CartItem[];
  isLoaded: boolean;
}
