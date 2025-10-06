const products = require('../../data/products');

const createOrder = (req, res) => {
  try {
    const { items, customerInfo } = req.body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ success: false, error: 'Items array is required and cannot be empty' });
    }

    let totalAmount = 0;
    const orderDetails = [];

    for (const item of items) {
      if (!item.productId || !item.quantity || item.quantity < 1) {
        return res.status(400).json({ success: false, error: 'Each item must have productId and quantity (minimum 1)' });
      }

      const product = products.find(p => p.id === item.productId);
      if (!product) {
        return res.status(400).json({ success: false, error: `Product with ID ${item.productId} not found` });
      }

      const itemTotal = product.price * item.quantity;
      totalAmount += itemTotal;

      orderDetails.push({
        productId: item.productId,
        productName: product.name,
        quantity: item.quantity,
        unitPrice: product.price,
        itemTotal: itemTotal,
        image: product.image
      });
    }

    const order = {
      timestamp: new Date().toISOString(),
      items: orderDetails,
      totalAmount: totalAmount,
      customerInfo: customerInfo || {},
      status: 'received'
    };

    logOrder(order);

    res.json({
      success: true,
      message: 'Order placed successfully!',
      order: {
        timestamp: order.timestamp,
        items: order.items,
        subtotal: order.totalAmount,
        tax: totalAmount * 0.08,
        total: totalAmount * 1.08,
        itemCount: order.items.length,
        customerInfo: order.customerInfo,
        status: order.status
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to process order' });
  }
};

const logOrder = (order) => {
  console.log('~~~~~~~~ NEW ORDER RECEIVED : ~~~~~~~~');
  console.log(`Ordered at Timestamp: ${order.timestamp}`);
  console.log(`Total Amount: $${order.totalAmount}`);
  order.items.forEach(item => {
    console.log(`  - ${item.productName} (Qty: ${item.quantity}) - $${item.itemTotal}`);
  });
  if (order.customerInfo.name) {
    console.log(`Customer: ${order.customerInfo.name}`);
  }
  console.log('======================\n');
};

module.exports = { createOrder };
