const Customer = require('../models/Customer');
const mongoose = require('mongoose');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const {getCachedData, setCachedData} = require('../utils/caching');

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
  const cachekey = `customers_${owner._id}`;
  const cachedData = getCachedData(cachekey);
  if (cachedData) {
    return res.status(200).json({
      message: `Customers for ${
        owner.business_name ? owner.business_name : owner.owner_name
      }: `,
      data: cachedData
    });
  }

  const allCustomers = await Customer.find({ owner_id: owner._id });
  setCachedData(cachekey, allCustomers);
  return res.status(200).json({
    message: `Customers for ${
      owner.business_name ? owner.business_name : owner.owner_name
    }: `,
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

exports.createCustomer = async (req, res) => {
  try {
    const newCustomerDetails = {
      name: req.body.name,
      customer_type: req.body.customer_type,
      email: req.body.email,
      contact_number: req.body.contact_number,
      business_address: req.body.business_address,
      owner_id: req.owner._id,
      phone_number: req.body.phone_number
    };

    // check if a customer with this email already exists for the current owner
    const foundCustomer = await Customer.findOne({
      email: req.body.email,
      owner_id: req.owner._id
    });
    if (foundCustomer) {
      return res.status(400).json({
        message: 'Customer with this email already exists',
        data: null
      });
    }

    const newCustomer = await Customer.create(newCustomerDetails);
    return res.status(201).json({
      message: 'Customer created successfully',
      data: newCustomer
    });
  } catch (error) {
    return res.status(500).json({
      message: 'An error occurred while creating customer: ' + error.message,
      data: null
    });
  }
};

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
    data: foundCustomer
  });
});

exports.deleteOneCustomer = catchAsync(async (req, res, next) => {
  const customerId = req.params.id;
  const deletedCustomer = await Customer.findOneAndDelete({
    _id: customerId,
    owner_id: req.owner._id
  });
  if (!deletedCustomer) {
    return next('Customer not found!', 404);
  }
  return res.status(204).json({
    message: 'Customer deleted successfully',
    data: null
  });
});
