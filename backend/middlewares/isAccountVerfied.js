const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.isAccountVerified = async (req, res, next) => {
  try {
    const currentUser = req.owner;
    if (currentUser.active !== true) {
      return res.status(401).json({
        message:
          'Sorry, your account is not verified yet. Please click on the button to verify your account.',
        data: null
      });
    }

    next();
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      data: null
    });
  }
};

exports.isDetailsComplete = async (req, res, next) => {
  try {
    const currentUser = req.owner;
    if (
      !currentUser.business_name ||
      !currentUser.business_address ||
      !currentUser.business_description ||
      !currentUser.contact_number
    ) {
      return res.status(401).json({
        message:
          'Sorry, your account details are not complete. Please complete your account details.',
        data: null
      });
    }

    next();
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      data: null
    });
  }
};

exports.isAccountVerified = catchAsync(async (req, res, next) => {
  try {
    const currentUser = req.owner;
    if (!currentUser.active) {
      return res.status(401).json({
        message: "You have not verified your account. Please check your mail",
        data: null
      });
    }

    next();
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      data: null
    });
  }
});
