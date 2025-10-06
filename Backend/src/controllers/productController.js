const products = require('../../data/products'); 

// @description   Get all products
// @route         GET /api/products
const getProducts = (req, res) => {
  try {
    console.log('Fetching all products...'); 
    console.log('Products found:', products.length); 
    res.json({
      success: true,
      data: products,
      count: products.length
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch Products'
    });
  }
};

// @description    Get single product by ID
// @route          GET /api/products/:id
const getProductById = (req, res) => {
  try {
    console.log(`Fetching product with ID: ${req.params.id}`); 

    // get the id
    const productId = parseInt(req.params.id);

    // search for the product that matches with the id
    const product = products.find(p => p.id === productId);
    
    if (!product) {
      console.log(`Product with ID ${productId} not found`);
      return res.status(404).json({
        success: false,
        error: 'Product not found'
      });
    }
    
    console.log(`Product found: ${product.name}`);
    res.json({
      success: true,
      data: product
    });
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch Products'
    });
  }
};

// @description     Search products by name or description
// @route           GET /api/products/search
const searchProducts = (req, res) => {
  try {
    const { q } = req.query;
    
    if (!q || q.trim() === '') {
      return res.json({
        success: true,
        data: products,
        count: products.length
      });
    }

    const searchTerm = q.toLowerCase().trim();
    
    const filteredProducts = products.filter(product => 
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm)
    );

    console.log(`Search for "${searchTerm}" found ${filteredProducts.length} products`); // Debug log
    
    res.json({
      success: true,
      data: filteredProducts,
      count: filteredProducts.length,
      searchTerm: searchTerm
    });
  } catch (error) {
    console.error('Error searching products:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to search products'
    });
  }
};

module.exports = {
  getProducts,
  getProductById,
  searchProducts
};