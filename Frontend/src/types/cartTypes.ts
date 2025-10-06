//====================================== Cart Item ==============================

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl?: string;
  description?: string;
}

export interface CartItemProps {
  item: CartItem;
  onRemove?: (id: number) => void;
  onUpdateQuantity?: (id: number, quantity: number) => void;
}

export interface CartItemViewProps {
  item: CartItem;
  onDecrease: () => void;
  onIncrease: () => void;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemove: () => void;
  itemTotal: number;
  isDecreaseDisabled: boolean;
}

export interface CartHandlers 
{
  handleDecrease:     () => void;
  handleIncrease:     () => void;
  handleInputChange:  (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleRemoveItem:   () => void;
  getItemTotal:       () => number;
  isDecreaseDisabled: () => boolean;
}

export interface CartItemHandlersProps {
  item: CartItem;
  updateQuantity: (id: number, quantity: number) => void;
  removeFromCart: (id: number) => void;
}

export interface CartExportData {
  cart: CartItem[];
  total: number;
  itemCount: number;
  exportDate: string;
}

//====================================== Cart Page ==============================

export interface CartPageViewProps {
  cart: CartItem[];
  getCartTotal: () => number;
  onClearCart: () => void;
  showCheckout?: boolean;
  setShowCheckout?: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface CartPageHandlersProps {
  cart: CartItem[];
  clearCart: () => void;
  getCartTotal: () => number;
}

export interface CartPageHandlers {
  handleClearCart: () => void;
}

