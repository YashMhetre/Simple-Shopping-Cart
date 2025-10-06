const app = require('./app');

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`-----> Server is running on port ${PORT}`);
  console.log(`-----> Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`-----> Shopping Cart API ready at http://localhost:${PORT}`);
});