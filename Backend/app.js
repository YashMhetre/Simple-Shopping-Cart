const express = require('express');
require('dotenv').config();

const productRoutes = require('./src/routes/productRoutes');
const orderRoutes = require('./src/routes/orderRoutes');
const corsMiddleware = require('./src/config/corsConfig');
const { errorHandler, notFound } = require('./src/middleware/errorMiddleware');

const app = express();

// Middleware
app.use(...corsMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/products', productRoutes);
app.use('/api', orderRoutes);

// Basic routes
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Shopping Cart Backend API',
    endpoints: {
      products: 'GET /api/products',
      product: 'GET /api/products/:id',
      checkout: 'POST /api/checkout'
    },
    timestamp: new Date().toISOString()
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'Server is running smoothly',
    uptime: process.uptime()
  });
});

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

module.exports = app;