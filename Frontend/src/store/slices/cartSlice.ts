import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem, Product, CartStoreState } from '../../types';
import type { RootState } from '../store';

const CART_STORAGE_KEY = 'shopping-cart';

// Load from localStorage
const loadCartFromStorage = (): CartItem[] => {
  try {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    if (savedCart) 
    {
      const parsedCart: unknown = JSON.parse(savedCart);
      
      if (Array.isArray(parsedCart)) {
        const isValidCart = parsedCart.every((item: any) => 
          item && 
          typeof item.id === 'number' &&
          typeof item.name === 'string' && 
          typeof item.price === 'number' && 
          typeof item.quantity === 'number' && 
          item.quantity > 0
        );
        
        if (isValidCart) {
          console.log('Cart loaded from localStorage:', parsedCart.length, 'items');
          return parsedCart as CartItem[];
        }
      }
    }
  } catch (error) {
    console.error('Error loading cart from localStorage:', error);
  }
  return [];
};

// Save to localStorage - called after any update to cart, saves to localStorage
const saveCartToStorage = (cart: CartItem[]): void => {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    console.log('Cart saved to localStorage:', cart.length, 'items');
  } catch (error) {
    console.error('Error saving cart to localStorage:', error);
  }
};

const initialState: CartStoreState = {
  items: loadCartFromStorage(),
  isLoaded: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) 
      {
        existingItem.quantity += 1;
      } 
      else 
      {
        const newCartItem: CartItem = {
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
          quantity: 1,
          imageUrl: action.payload.imageUrl, // Make sure imageUrl is included
          description: action.payload.description
        };
        state.items.push(newCartItem);
      }
      
      saveCartToStorage(state.items);
    },
    
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      saveCartToStorage(state.items);
    },
    
    updateQuantity: (state, action: PayloadAction<{ productId: number; quantity: number }>) => {
      const { productId, quantity } = action.payload;
      
      if (quantity <= 0) {
        state.items = state.items.filter(item => item.id !== productId);
      } else {
        const item = state.items.find(item => item.id === productId);
        if (item) {
          item.quantity = quantity;
        }
      }
      
      saveCartToStorage(state.items);
    },
    
    clearCart: (state) => {
      state.items = [];
      saveCartToStorage(state.items);
    },
    
    clearCartStorage: (state) => {
      state.items = [];
      localStorage.removeItem(CART_STORAGE_KEY);
      console.log('Cart storage cleared');
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart, clearCartStorage } = cartSlice.actions;

// Selectors
export const selectCartItems = (state: RootState): CartItem[] => state.cart.items;
export const selectIsLoaded = (state: RootState): boolean => state.cart.isLoaded;
export const selectCartTotal = (state: RootState): number => state.cart.items.reduce((total: number, item: CartItem) => total + (item.price * item.quantity), 0);
export const totalItemsInCart = (state: RootState): number => state.cart.items.reduce((count: number, item: CartItem) => count + item.quantity, 0);

export default cartSlice.reducer;