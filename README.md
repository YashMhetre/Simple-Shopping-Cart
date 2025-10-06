
# Simple Shopping Cart

A full-stack e-commerce shopping cart application built with modern web technologies.

## 🚀 Tech Stack

### Frontend
- **React.js 19.2.0** with **TypeScript**
- **Redux Toolkit** for state management
- **React Router** for navigation
- **Bootstrap** for styling and responsiveness
- Port: `3000`

### Backend
- **Node.js v22.14.0** with **JavaScript**
- **Express.js** framework
- **npm 10.9.2**
- Port: `8080`

## ✨ Features

### Core Functionality
- Browse products catalog
- Add items to cart
- Remove items from cart
- View cart with item details
- Calculate total price
- Responsive design

### Additional Features
- **Lazy Loading** - Efficient page loading for better performance
- **Error Boundary** - Fallback UI for runtime errors
- **Toast Notifications** - Pop-up messages for user feedback
- **Product Search** - Search functionality in the Products Page
- **Light/Dark Mode** - Toggle between light and dark themes for user-friendly interface
- **Integration Testing** - Comprehensive backend integration tests with all test cases passed

   <img width="608" height="258" alt="Screenshot 2025-10-06 120204" src="https://github.com/user-attachments/assets/f855e1ed-d4e7-4375-aeb5-bed6e083901f" />




## 📁 Project Structure

### Frontend
```
Frontend/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── CART_ITEM.tsx
│   │   ├── CartItem.tsx
│   │   ├── CartItemNew.tsx
│   │   └── ...
│   ├── ORDER_MODAL/
│   ├── CHECK_OUT_FORM/
│   ├── ErrorBoundary.tsx
│   ├── productCartWrapper.tsx
│   ├── pages/
│   │   ├── HOME_PAGE
│   │   ├── PAGE_NOT_FOUND
│   │   ├── PRODUCTS_PAGE
│   │   └── CART_PAGE
│   ├── router/
│   ├── services/
│   ├── stores/
│   ├── types/
│   ├── utils/
│   ├── App.tsx
│   ├── index.tsx
│   └── ...
├── package.json
└── README.md
```

### Backend
```
Backend/
├── node_modules/
├── data/
│   └── products.js
├── src/
│   ├── config/
│   │   └── corsConfig.js
│   ├── controllers/
│   │   ├── orderController.js
│   │   └── productController.js
│   ├── middleware/
│   │   └── validationMiddleware.js
│   ├── routes/
│   │   └── productRoutes.js
│   └── ...
├── tests/
├── package.json
└── server.js
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js v22.14.0 or higher
- npm 10.9.2 or higher

### Clone the Repository
```bash
git clone https://github.com/YashMhetre/Simple-Shopping-Cart.git
cd Simple-Shopping-Cart
```

### Frontend Setup
```bash
cd Frontend
npm install
npm run dev
```
The frontend will run on **http://localhost:3000**

### Backend Setup
```bash
cd Backend
npm install
npm run dev
```
The backend will run on **http://localhost:8080**

## 🎯 Usage

1. Start the backend server first
2. Start the frontend development server
3. Open your browser and navigate to `http://localhost:3000`
4. Browse products, add items to cart, and proceed to checkout

## 📝 API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product

### Orders
- `POST /api/orders` - Create new order

### CORS Configuration
The backend is configured to accept requests from the frontend running on port 3000.
