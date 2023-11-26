const path = require('path');

const express = require('express');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const compression = require('compression');

const cookieParser = require('cookie-parser');
const rateLimit = require('express-rate-limit');
const connectDB = require('./configs/dbConfig');
const ownerRoutes = require('./routes/ownerRoutes');
const customerRoutes = require('./routes/customerRoutes');
const invoiceRoutes = require('./routes/invoiceRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const globalErrorHandler = require('./controllers/errorController');
const AppError = require('./utils/appError');

require('dotenv').config();

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

const allowedOrigins = [
  'https://klusterthon023-fintech.vercel.app',
  'http://localhost:5173'
];

const corsOptions = {
  origin: allowedOrigins,
  credentials: true
};
app.use(cors(corsOptions));

// const limiter = rateLimit({
//   max: 300,
//   windowMs: 60 * 60 * 1000,
//   message: 'Too many requests from this IP, try again in a hour!'
// });
// app.use('/v1', limiter);

app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(mongoSanitize());
app.use(xss());
app.use(compression());

app.get('/v1', (req, res) => {
  res.json({ message: 'welcome to klusterthon023 Fintech Backend App' });
});
app.use('/v1/auth', ownerRoutes);
app.use('/v1/customers', customerRoutes);
app.use('/v1/invoices', invoiceRoutes);
app.use('/v1/dashboard', dashboardRoutes);
app.use('/v1/notification', notificationRoutes);

app.use('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
