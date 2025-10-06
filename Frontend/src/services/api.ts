import { Product, ApiResponse, CheckoutOrderData, CheckoutResponse } from '../types';

// Backend API BASE URL
const API_BASE_URL = 'http://localhost:8080/api';

// Fetch all products
export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/products`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data: ApiResponse<Product[]> = await response.json();
    return data.success ? (data.data || []) : [];
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

// Fetch single product by ID
export const fetchProductById = async (id: string): Promise<Product | null> => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${id}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data: ApiResponse<Product> = await response.json();
    return data.success ? (data.data || null) : null;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};

// Search products
export const searchProducts = async (query: string): Promise<Product[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/search?q=${encodeURIComponent(query)}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data: ApiResponse<Product[]> = await response.json();
    return data.success ? (data.data || []) : [];
  } catch (error) {
    console.error('Error searching products:', error);
    throw error;
  }
};

// Checkout order (create order)
export const checkoutOrder = async (orderData: CheckoutOrderData): Promise<CheckoutResponse> => {
  try {
    console.log('Sending checkout request:', orderData);
    
    const response = await fetch(`${API_BASE_URL}/checkout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData)
    });
    
    const data: CheckoutResponse = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || `HTTP error! status: ${response.status}`);
    }
    
    console.log('Checkout response:', data);
    return data;
  } catch (error) {
    console.error('Checkout error:', error);
    throw error;
  }
};


