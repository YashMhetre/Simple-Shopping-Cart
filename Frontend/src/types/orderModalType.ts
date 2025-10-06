import { OrderDetails } from './orderTypes';

export interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderData: OrderDetails | null;
}