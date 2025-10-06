const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200
};

module.exports = [
  helmet(),
  cors(corsOptions),
  morgan('combined')
];