const Owner = require('../models/Owner');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

//temporary function to get all owners
exports.getAllOwners = async (req, res) => {
  try {
    const owners = await Owner.find();
    return res.status(200).json({
      message: 'All owners',
      data: owners
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      data: null
    });
  }
};

exports.getOwner = catchAsync(async (req, res, next) => {
  const owner = await Owner.findById(req.owner._id);
  if (!owner) {
    return next(new AppError('Please log in to get access', 401));
  }
  res.status(200).json({
    status: 'success',
    owner
  });
});
