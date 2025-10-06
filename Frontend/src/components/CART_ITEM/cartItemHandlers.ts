import { toast } from "react-toastify";
import { useAppDispatch } from "../../store/hooks";
import { updateQuantity, removeFromCart } from "../../store/slices/cartSlice";
import { CartItem, CartHandlers } from "../../types";

export const useCartHandlers = (item: CartItem): CartHandlers => {
  
  const dispatch = useAppDispatch();

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveItem();
      return;
    }
    dispatch(updateQuantity({ productId: item.id, quantity: newQuantity }));
  };

  const handleRemoveItem = () => {
    dispatch(removeFromCart(item.id));
    toast.info(`${item.name} removed from cart`, {
      position: "top-right",
      autoClose: 1000,
    });
  };

  const handleDecrease = () => handleQuantityChange(item.quantity - 1);
  const handleIncrease = () => handleQuantityChange(item.quantity + 1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 1;
    handleQuantityChange(value);
  };

  const getItemTotal = () => item.price * item.quantity;
  const isDecreaseDisabled = () => item.quantity <= 1;

  return {
    handleDecrease,
    handleIncrease,
    handleInputChange,
    handleRemoveItem,
    getItemTotal,
    isDecreaseDisabled,
  };
};
