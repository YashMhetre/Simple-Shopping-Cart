import React from 'react';
import { CheckoutFormViewProps } from '../../types';

const CheckoutFormView: React.FC<CheckoutFormViewProps> = ({
  customerInfo,
  formErrors,
  isProcessing,
  getCartTotal,
  onInputChange,
  onBlur,
  onSubmit,
  onCancel,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <h6 className="mb-3">Customer Information</h6>
      
      <div className="mb-3">
        <input
          type="text"
          className={`form-control form-control-sm ${formErrors.name ? 'is-invalid' : ''}`}
          placeholder="Full Name *"
          name="name"
          value={customerInfo.name}
          onChange={onInputChange}
          onBlur={onBlur}
        />
        {formErrors.name && <div className="invalid-feedback">{formErrors.name}</div>}
      </div>
      
      <div className="mb-3">
        <input
          type="text"
          className={`form-control form-control-sm ${formErrors.email ? 'is-invalid' : ''}`}
          placeholder="Email Address *"
          name="email"
          value={customerInfo.email}
          onChange={onInputChange}
          onBlur={onBlur}
        />
        {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
      </div>
      
      <div className="mb-3">
        <input
          type="text"
          className={`form-control form-control-sm ${formErrors.address ? 'is-invalid' : ''}`}
          placeholder="Address *"
          name="address"
          value={customerInfo.address}
          onChange={onInputChange}
          onBlur={onBlur}
        />
        {formErrors.address && <div className="invalid-feedback">{formErrors.address}</div>}
      </div>
      
      <div className="row mb-3">
        <div className="col-8">
          <input
            type="text"
            className={`form-control form-control-sm ${formErrors.city ? 'is-invalid' : ''}`}
            placeholder="City *"
            name="city"
            value={customerInfo.city}
            onChange={onInputChange}
            onBlur={onBlur}
          />
          {formErrors.city && <div className="invalid-feedback">{formErrors.city}</div>}
        </div>
        <div className="col-4">
          <input
            type="text"
            className={`form-control form-control-sm ${formErrors.pinCode ? 'is-invalid' : ''}`}
            placeholder="PIN Code *"
            name="pinCode"
            value={customerInfo.pinCode}
            onChange={onInputChange}
            onBlur={onBlur}
          />
          {formErrors.pinCode && <div className="invalid-feedback">{formErrors.pinCode}</div>}
        </div>
      </div>
      
      <hr />
      <h6 className="mb-3">Payment Information</h6>
      
      <div className="mb-3">
        <input
          type="text"
          className={`form-control form-control-sm ${formErrors.cardNumber ? 'is-invalid' : ''}`}
          placeholder="Card Number (10 digits) *"
          name="cardNumber"
          value={customerInfo.cardNumber}
          onChange={onInputChange}
          onBlur={onBlur}
        />
        {formErrors.cardNumber && <div className="invalid-feedback">{formErrors.cardNumber}</div>}
      </div>
      
      <div className="row mb-3">
        <div className="col-8">
          <input
            type="text"
            className={`form-control form-control-sm ${formErrors.expiryDate ? 'is-invalid' : ''}`}
            placeholder="MM/YY *"
            name="expiryDate"
            value={customerInfo.expiryDate}
            onChange={onInputChange}
            onBlur={onBlur}
          />
          {formErrors.expiryDate && <div className="invalid-feedback">{formErrors.expiryDate}</div>}
        </div>
        <div className="col-4">
          <input
            type="text"
            className={`form-control form-control-sm ${formErrors.cvv ? 'is-invalid' : ''}`}
            placeholder="CVV (3 digits) *"
            name="cvv"
            value={customerInfo.cvv}
            onChange={onInputChange}
            onBlur={onBlur}
          />
          {formErrors.cvv && <div className="invalid-feedback">{formErrors.cvv}</div>}
        </div>
      </div>
      
      <div className="d-grid gap-2">
        <button 
          type="submit" 
          className="btn btn-success"
          disabled={isProcessing}
        >
          {isProcessing ? (
            <>
              <span className="spinner-border spinner-border-sm me-2"></span>
              Processing...
            </>
          ) : (
            <>
              Complete Order - ₹{getCartTotal().toFixed(2)}
            </>
          )}
        </button>
        <button 
          type="button" 
          className="btn btn-outline-secondary"
          onClick={onCancel}
          disabled={isProcessing}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default CheckoutFormView;
