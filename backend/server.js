const express = require('express');
const path = require('path')
const cors = require('cors');
const cookieParser = require('cookie-parser');

const connectDB = require('./configs/dbConfig');
const ownerRoutes = require('./routes/ownerRoutes');
const customerRoutes = require('./routes/customerRoutes');
const invoiceRoutes = require('./routes/invoiceRoutes');
const globalErrorHandler = require('./controllers/errorController');
const AppError = require('./utils/appError');

require('dotenv').config();

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/v1', (req, res) => {
  res.json({ message: 'welcome to klusterthon023 Fintech Backend App' });
});
app.use('/v1/auth', ownerRoutes);
app.use('/v1/customers', customerRoutes);
app.use('/v1/invoices', invoiceRoutes);

app.use('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
