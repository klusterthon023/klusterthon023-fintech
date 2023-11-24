const AppError = require('../utils/appError');

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
