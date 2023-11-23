const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for the objects within the products array
const productSchema = new Schema({
  product_name: {
    type: String,
    required: [true, 'Please enter product name']
  },
  quantity: {
    type: Number,
    required: [true, 'Please enter quantity']
  },
  unit_price: {
    type: Number,
    required: [true, 'Please enter unit price']
  }
});

// Define the main schema for the invoice model
const invoiceSchema = new mongoose.Schema({
  owner_id: {
    required: [true, 'Please enter owner id'],
    type: mongoose.Schema.ObjectId,
    ref: 'Owner'
  },
  customer_id: {
    required: [true, 'Please enter customer id'],
    type: mongoose.Schema.ObjectId,
    ref: 'Customer'
  },
  transcation_details: {
    type: String,
    required: [true, 'Please enter transaction details']
  },
  products: {
    type: [productSchema],
    required: [true, 'Please enter products']
  },
  total_amount: {
    type: Number,
    required: [true, 'Please enter amount']
  },
  status: {
    type: String,
    enum: ['Pending', 'Paid'],
    default: 'Pending'
  },
  created_date: {
    type: Date,
    default: Date.now()
  },
  due_date: {
    type: Date,
    required: [true, 'Please enter due date']
  },
  date_paid: {
    type: Date
  }
});

module.exports = mongoose.model('Invoice', invoiceSchema);
