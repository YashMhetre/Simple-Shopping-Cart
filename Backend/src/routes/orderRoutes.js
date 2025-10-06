const express = require('express');
const { createOrder } = require('../controllers/orderController'); // Remove getOrders

const router = express.Router();

router.route('/checkout')
  .post(createOrder);

module.exports = router;