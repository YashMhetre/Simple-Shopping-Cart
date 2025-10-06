import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from './components/APP_COMP/Navigation';
import NotFoundPage from "./pages/PAGE_NOT_FOUND/NotFoundPage";

const HomePage = lazy(() => import('./pages/HOME_PAGE/HomePage'));
const ProductsPage = lazy(() => import('./pages/PRODUCTS_PAGE/ProductsPage'));
const CartPage = lazy(() => import('./pages/CART_PAGE/CartPage'));

const App: React.FC = () => {
  return (  
    <div className="app-wrapper">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Navigation />
      </nav>

      <div className="container mt-4">
        <Suspense fallback={<div>Loading page...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default App;