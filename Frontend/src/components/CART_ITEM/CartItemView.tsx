import React                  from "react";
import { CartItemViewProps }  from "../../types"; 

const CartItemView: React.FC<CartItemViewProps> = ({
  item,
  onDecrease,
  onIncrease,
  onInputChange,
  onRemove,
  itemTotal,
  isDecreaseDisabled,
}) => {
  return (
    <div className="row align-items-center py-3 border-bottom">
      <div className="col-3 col-md-2">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="img-fluid rounded"
          style={{ height: "80px", objectFit: "cover" }}
        />
      </div>
      
      <div className="col-9 col-md-4">
        <h6 className="mb-1">{item.name}</h6>
        <small className="text-muted">₹{item.price}</small>
      </div>

      <div className="col-6 col-md-3">
        <div className="input-group input-group-sm">
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={onDecrease}
            disabled={isDecreaseDisabled}
          >
            <i className="bi bi-dash"></i>
          </button>

          <input
            type="number"
            className="form-control text-center"
            value={item.quantity}
            onChange={onInputChange}
            min="1"
          />

          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={onIncrease}
          >
            <i className="bi bi-plus"></i>
          </button>
        </div>
      </div>

      <div className="col-3 col-md-2">
        <strong>₹{itemTotal.toFixed(2)}</strong>
      </div>

      <div className="col-3 col-md-1">
        <button
          className="btn btn-outline-danger btn-sm"
          onClick={onRemove}
          title="Remove item"
        >
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default CartItemView;