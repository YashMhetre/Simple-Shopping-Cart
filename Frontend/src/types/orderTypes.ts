export interface OrderItem {
  productId: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl?: string;
}

export interface Order {
  id: string;
  items: OrderItem[];
  total: number;
  createdAt: string;
}

export interface OrderDetails {
  customerInfo: {
    name: string;
    email: string;
    address: string;
    city: string;
    pinCode: string;
  };
  items: Array<{
    productId: number;
    productName: string;
    quantity: number;
    itemTotal: number;
    imageUrl?: string;
  }>;
  subtotal: number;
  orderDate: string;
  timestamp?: string;
  total?: number;
  status?: string;
  itemCount?: number;
}
