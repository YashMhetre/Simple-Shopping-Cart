import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import ErrorBoundary from './errorboundary/ErrorBoundary';  
import App from './App';

// Bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// Toast imports
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SimpleToastContainer: React.FC = () => {
  return (
    <ToastContainer position="top-right" autoClose={3000} />
  );
};

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Failed to find the root element');
}

ReactDOM.createRoot(rootElement).render(
    <Provider store={store}>
      <BrowserRouter>
        <ErrorBoundary>
          <App />
          <SimpleToastContainer />
        </ErrorBoundary>
      </BrowserRouter>
    </Provider>
);
