import React from 'react';
import { CartPageViewProps } from '../../types';
import CartItem from "../../components/CART_ITEM/CartItem";
import CheckoutForm from '../../components/CHECK_OUT_FORM/CheckOutForm';

const CartPageView: React.FC<CartPageViewProps> = ({
  cart,
  showCheckout = false,
  setShowCheckout,
  getCartTotal,
  onClearCart
}) => {
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1 className="h2 mb-0">Shopping Cart</h1>
            <div>
              <button 
                className="btn btn-outline-danger"
                onClick={onClearCart}
              >
                <i className="bi bi-trash me-2"></i>
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-8">
          <div className="card">
            <div className="card-body">
              {cart.map(item => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Order Summary</h5>
              <hr />
              
              <div className="d-flex justify-content-between mb-4">
                <span>Total ({cart.reduce((count, item) => count + item.quantity, 0)} items):</span>
                <strong className="text-primary">₹{getCartTotal().toFixed(2)}</strong>
              </div>

              {!showCheckout ? (
                <button 
                  className="btn btn-primary w-100 btn-lg"
                  onClick={() => setShowCheckout?.(true)}
                >
                  <i className="bi bi-credit-card me-2"></i>
                  Proceed to Checkout
                </button>
              ) : (
                <CheckoutForm onCancel={() => setShowCheckout?.(false)} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPageView;
