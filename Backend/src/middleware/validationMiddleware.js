const validateCheckout = (req, res, next) => {
  const { items } = req.body;
  
  // It ensures items exists and is an array
  if (!items || !Array.isArray(items)) 
  {
    return res.status(400).json({
      success: false,
      error: 'Items must be an array'
    });
  }
  
  next();
};

module.exports = {
  validateCheckout
};