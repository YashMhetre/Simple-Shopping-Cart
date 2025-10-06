import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import { selectIsDark } from '../../store/slices/themeSlice';

const HomePage: React.FC = () => {
  const isDark = useAppSelector(selectIsDark);

  return (
    <div className="welcome-page">
        <div className="container text-center">
          <h2 className="display-5 fw-bold mb-2">Ready to Start Shopping?</h2>
          <p className="lead text-muted mb-4">
            Explore our wide range of products and find exactly what you need.
          </p>
          <Link to="/products" className="btn btn-primary btn-lg px-5 py-2">
            <i className="bi bi-arrow-right-circle me-2"></i>
            Get Started
          </Link>
        </div>
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-md-6">
              <h3 className="fw-bold mb-3">Shop Smart, Shop Easy</h3>
              <p className="text-muted mb-3">
                Our platform is designed to make your shopping experience as smooth as possible. 
                Browse through categories, add items to your cart, and checkout in just a few clicks.
              </p>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Easy product search and filtering
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Secure checkout process
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Real-time cart updates
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Responsive design for all devices
                </li>
              </ul>
            </div>
            <div className="col-md-6 text-center">
              <div className={`p-5 rounded shadow-sm ${isDark ? 'bg-dark' : 'bg-white'}`}>
                <i className="bi bi-bag-heart-fill text-primary mb-3" style={{ fontSize: '5rem' }}></i>
                <h4 className="mb-3">Customer Satisfaction</h4>
                <p className="text-muted">
                  Discover why shoppers love choosing us for quality and convenience.
                </p>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default HomePage;