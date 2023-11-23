const Customer = require('../models/Customer');
const mongoose = require('mongoose');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getAllCustomers = catchAsync(async (req, res) => {
  const allCustomers = await Customer.find({});
  return res.json({
    message: 'All Customers fetched successfully',
    data: allCustomers
  });
});

// Implemented after AUTH
exports.getMyCustomers = catchAsync(async (req, res, next) => {
  const owner = req.owner;
  const allCustomers = await Customer.find({ owner_id: owner._id });
  return res.status(200).json({
    message: `Customers for ${owner.business_name}: `,
    data: allCustomers
  });
});

exports.getOneCustomer = catchAsync(async (req, res, next) => {
  const customerId = req.params.id;
  const owner = req.owner;
  const foundCustomer = await Customer.find({
    _id: customerId,
    owner_id: owner._id
  });
  if (!foundCustomer) {
    return next(new AppError('Customer not found!', 404));
  }

  return res.status(200).json({
    message: 'Customer fetched successfully',
    data: foundCustomer
  });
});

exports.createCustomer = catchAsync(async (req, res, next) => {
  const newCustomerDetails = {
    name: req.body.name,
    customer_type: req.body.customer_type,
    email: req.body.email,
    contact_number: req.body.contact_number,
    business_address: req.body.business_address,
    owner_id: req.owner._id
  };
  const newCustomer = await Customer.create(newCustomerDetails);
  return res.status(201).json({
    message: 'Customer created successfully',
    data: newCustomer
  });
});

exports.updateCustomer = catchAsync(async (req, res, next) => {
  const foundCustomer = await Customer.findOneAndUpdate(
    {
      _id: req.params.id,
      owner_id: req.owner._id
    },
    req.body,
    {
      new: true,
      runValidators: true
    }
  );
  if (!foundCustomer) {
    return next('Customer not found!', 404);
  }
  return res.status(201).json({
    message: 'Customer Updated successfully',
    data: updatedCustomer
  });
});


exports.deleteOneCustomer = catchAsync(async (req, res, next) => {
  const customerId = req.params.id;
  const deletedCustomer = await Customer.findOneAndDelete({ _id: customerId, owner_id: req.owner._id });
  if (!deletedCustomer) {
    return next('Customer not found!', 404);
  }
  return res.status(204).json({
    message: 'Customer deleted successfully',
    data: null
  });
});
