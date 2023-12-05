const mongoose = require('mongoose');
const validator = require('validator');

const notifySchema = new mongoose.Schema(
  {
    notification_type: {
      type: String,
      required: [true, 'Please provide a type']
    },
    owner: {
      type: mongoose.Schema.ObjectId,
      ref: 'Owner'
    },
    invoice_id: {
      type: mongoose.Schema.ObjectId,
      ref: 'Invoice'
    },
    customer_id: {
      type: mongoose.Schema.ObjectId,
      ref: 'Customer'
    },
    payment_status: {
      type: String,
      enum: ['pending', 'paid', 'cancelled']
    },
    description: {
      type: String,
      trim: true
    },
    createAt: {
      type: Date,
      default: Date.now()
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

notifySchema.index({ owner: 1 });
notifySchema.index({ createAt: -1 });

notifySchema.virtual('invoice', {
  ref: 'Invoice',
  foreignField: '_id',
  localField: 'invoice_id'
});
notifySchema.virtual('customer', {
  ref: 'Customer',
  foreignField: '_id',
  localField: 'customer_id'
});

const Notification = mongoose.model('Notification', notifySchema);

module.exports = Notification;
