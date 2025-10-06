export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface ApiOrderResponse {
  timestamp: string;
  items: Array<{
    productId: number;
    productName: string;
    quantity: number;
    itemTotal: number;
  }>;
  subtotal: number;
  tax: number;
  total: number;
  customerInfo: {
    name: string;
    email: string;
    address: string;
    city: string;
    pinCode: string;
  };
  status: string;
  itemCount: number;
}