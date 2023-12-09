const mongoose = require('mongoose');
const validator = require('validator');

const feedbackSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      validate: {
        validator: function (val) {
          return /^[a-zA-Z.\s]+$/.test(val);
        },
        message:
          'Please your business name must contain letters, spaces and dot(.) only'
      }
    },
    email: {
      type: String,
      required: [true, 'Please enter an email'],
      validate: [validator.isEmail, 'Please provide a valid email']
    },
    details: {
      type: String,
      trim: true
    },
    create_date: {
      type: Date,
      default: Date.now
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

feedbackSchema.index({ created_date: -1 });

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;
