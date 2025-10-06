import React                                from 'react';
import { Link }                             from 'react-router-dom';
import { useAppDispatch, useAppSelector }   from '../../store/hooks';
import { toggleTheme, selectIsDark }        from '../../store/slices/themeSlice';
import { totalItemsInCart, selectIsLoaded } from '../../store/slices/cartSlice';

const Navigation: React.FC = () => {
  const dispatch        = useAppDispatch();
  const isDark          = useAppSelector(selectIsDark);
  const cartItemsCount  = useAppSelector(totalItemsInCart);
  const isLoaded        = useAppSelector(selectIsLoaded);

  return (
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">
        <i className="bi bi-shop me-2"></i>
        Shopping Cart
      </Link>
      
      <button 
        className="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              <i className="bi bi-house-door me-1"></i>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/products">
              <i className="bi bi-grid me-1"></i>
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link position-relative" to="/cart">
              <i className="bi bi-cart me-1"></i>
              Cart
              {isLoaded ? (
                cartItemsCount > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartItemsCount}
                  </span>
                )
              ) : (
                <span className="position-absolute top-0 start-100 translate-middle">
                  <div 
                    className="spinner-border spinner-border-sm text-light" 
                    role="status" 
                    style={{width: '0.8rem', height: '0.8rem'}}
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </span>
              )}
            </Link>
          </li>
          <li className="nav-item">
            <button 
              className="nav-link btn btn-link" 
              onClick={() => dispatch(toggleTheme())}
              style={{ border: 'none', cursor: 'pointer' }}
            >
              <i className={`bi ${isDark ? 'bi-sun-fill' : 'bi-moon-fill'} me-1`}></i>
              {isDark ? 'Light' : 'Dark'}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;