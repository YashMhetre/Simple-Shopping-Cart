import React from "react";
import { CartItemProps } from "../../types";
import { useCartHandlers } from "./cartItemHandlers";
import CartItemView from "./CartItemView";

const CartItem: React.FC<CartItemProps> = ({ item }) => {

  const {
    handleDecrease,
    handleIncrease,
    handleInputChange,
    handleRemoveItem,
    getItemTotal,
    isDecreaseDisabled,
  } = useCartHandlers(item); 

  return (
    <CartItemView
      item={item}
      onDecrease={handleDecrease}
      onIncrease={handleIncrease}
      onInputChange={handleInputChange}
      onRemove={handleRemoveItem}
      itemTotal={getItemTotal()}
      isDecreaseDisabled={isDecreaseDisabled()}
    />
  );
};

export default CartItem;
