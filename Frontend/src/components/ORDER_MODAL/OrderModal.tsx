import React from 'react';
import { OrderModalProps } from '../../types';
import { Link } from "react-router-dom";
import { modalStyles } from './modalStyles';

const OrderModal: React.FC<OrderModalProps> = ({ 
  isOpen,
  onClose, 
  orderData 
}) => {
  if (!isOpen || !orderData) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div 
      className="modal show d-block" 
      style={modalStyles.overlay}
      onClick={handleOverlayClick}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header" style={modalStyles.header}>
            <div style={modalStyles.headerCenter}>
              <div style={modalStyles.successIconContainer}>
                <span style={modalStyles.successIcon}>✓</span>
              </div>
              <h2 style={modalStyles.headerTitle}>
                Order Confirmed!
              </h2>
            </div>
          </div>
          
          <div className="modal-body">
            <p><strong>Customer:</strong> {orderData.customerInfo.name}</p>
            <p><strong>Email:</strong> {orderData.customerInfo.email}</p>
            <p><strong>Address:</strong> {orderData.customerInfo.address}</p>
            <p><strong>Total:</strong> ₹{orderData.subtotal}</p>
            
            <h6>Items:</h6>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {orderData.items?.map((item, index) => (
                <li 
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '15px',
                    padding: '10px',
                    border: '1px solid #eee',
                    borderRadius: '8px',
                    backgroundColor: '#f9f9f9'
                  }}
                >
                  {item.imageUrl ? (
                    <img 
                      src={item.imageUrl} 
                      alt={item.productName}
                      style={{
                        width: '60px',
                        height: '60px',
                        objectFit: 'cover',
                        borderRadius: '4px',
                        marginRight: '15px',
                        border: '1px solid #ddd'
                      }}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  ) : (
                    <div 
                      style={{
                        width: '60px',
                        height: '60px',
                        backgroundColor: '#e0e0e0',
                        borderRadius: '4px',
                        marginRight: '15px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '12px',
                        color: '#666'
                      }}
                    >
                      No Image
                    </div>
                  )}
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 'bold', marginBottom: '4px', color: '#201111ff' }}>
                      {item.productName}
                    </div>
                    <div style={{ color: '#211c1cff', fontSize: '14px' }}>
                      Qty: {item.quantity} - ₹{item.itemTotal.toFixed(2)}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="modal-footer">
            <Link 
              to="/products" 
              className="btn btn-primary"
              onClick={onClose}   
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
