const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const ownerSchema = new mongoose.Schema({
  business_name: {
    type: String,
    required: [true, 'Please enter a fbusiness name'],
    validate: {
      validator: function (val) {
        return /^[a-zA-Z.\s]+$/.test(val);
      },
      message:
        'Please your business name must contain letters, spaces and dot(.) only'
    }
  },
  owner_name: {
    type: String,
    required: [true, 'Please enter the name of business owner'],
    validate: {
      validator: function (val) {
        return !/([^\sa-zA-Z]+)/g.test(val);
      },
      message: 'Please your full name must contain letters and spaces only'
    }
  },
  email: {
    type: String,
    required: [true, 'Please enter an email'],
    unique: true,
    validate: [validator.isEmail, 'Please provide a valid email']
  },
  business_address: {
    type: String,
    required: [true, 'Please enter business address']
  },
  business_description: {
    type: String,
    required: [true, 'Please enter business description']
  },
  password: {
    type: String,
    required: [true, 'Please enter a password'],
    minlength: [6, 'Minimum password length is 6 characters'],
    select: false
  },
  contact_number: {
    type: String,
    validate: {
      validator: function (val) {
        return !/([^\0-9]+)/g.test(val);
      },
      message: 'Phone numbers should contain numbers only'
    }
  },
  active: {
    type: Boolean,
    default: false
  },
  role: {
    type: String,
    enum: ['owner', 'admin'],
    default: 'owner'
  },
  activationToken: String,
  activationTokenExpire: Date,
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date
});

ownerSchema.pre('save', async function (next) {
  //Only if password was modified.
  if (!this.isModified('password')) return next();
  //Hash password if it was modified with a cost of 12
  this.password = await bcrypt.hash(this.password, 12);
  next();
  //
});

ownerSchema.methods.correctPassword = async function (
  candidatePassword,
  ownerPassword
) {
  return await bcrypt.compare(candidatePassword, ownerPassword);
};

ownerSchema.methods.changedPasswordAfter = function (JWTTimeStamp) {
  if (this.passwordChangedAt) {
    const changedTimeStamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    return JWTTimeStamp < changedTimeStamp;
  }

  //False means not changed
  return false;
};

module.exports = mongoose.model('Owner', ownerSchema);
