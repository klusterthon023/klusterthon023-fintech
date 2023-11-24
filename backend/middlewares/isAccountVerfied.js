const AppError = require('../utils/appError');

exports.isAccountVerified = async (req, res, next) => {
  try {
    const currentUser = req.owner;
    if (currentUser.active !== true) {
      return res.status(401).json({
        message:
          'Sorry, your account is not verified yet. Please check your email for verification link.',
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
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      data: null
    });
  }
};

exports.isAccountVerified = (req, res, next) => {
  const currentUser = req.owner;
  if (!currentUser.active) {
    return next(
      new AppError(
        "You haven't verified your account. Please check your mail.",
        401
      )
    );
  }
  next();
};
