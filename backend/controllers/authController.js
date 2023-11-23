const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const bcrypt = require('bcrypt'); //temporary import

const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const Owner = require('../models/Owner');
const Email = require('../utils/email');

// signing the jwt token
const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });
};

// refactored the feedback
const createSendToken = (foundUser, statusCode, req, res) => {
  const token = signToken(foundUser._id);

  res.cookie('jwt', token, {
    maxAge: process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000,
    // expires: new Date(
    //   Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    // ),
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production'
  });
  // removes the password from the output
  delete foundUser.password;
  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user: foundUser
    }
  });
};

// Refactored the register middleware
exports.register = catchAsync(async (req, res, next) => {
  const urlActivationToken = crypto.randomBytes(32).toString('hex');
  const activationToken = crypto
    .createHash('sha256')
    .update(urlActivationToken)
    .digest('hex');
  const activationTokenExpire = Date.now() + 20 * 60 * 1000;

  const newOwnerDetails = {
    business_name: req.body.business_name,
    owner_name: req.body.owner_name,
    email: req.body.email,
    business_address: req.body.business_address,
    business_description: req.body.business_description,
    contact_number: req.body.contact_number,
    password: req.body.password,
    activationToken,
    activationTokenExpire
  };

  const newOwner = await Owner.create(newOwnerDetails);

  const url = `${req.protocol}://${req.get(
    'host'
  )}/v1/auth/activate/${urlActivationToken}`;
  try {
    await new Email(newOwner, url).sendWelcome();
    return res.status(201).json({
      status: 'success',
      message:
        'Signup successful, kindly check your email and activate your account.'
    });
  } catch (err) {
    await Owner.deleteOne({ email: req.body.email });
    return next(err);
  }
});

// This activates the owners account when the click the link sent to their emails
exports.activateAccount = catchAsync(async (req, res, next) => {
  const hashedToken = crypto
    .createHash('sha256')
    .update(req.params.token)
    .digest('hex');

  const owner = await Owner.findOne({
    activationToken: hashedToken,
    activationTokenExpire: { $gt: Date.now() }
  });
  if (!owner) return next(new AppError('Invalid or expired token', 400));
  owner.activationTokenExpire = undefined;
  owner.activationToken = undefined;
  owner.active = true;
  await owner.save({ validateBeforeSave: false });
  const token = signToken(owner._id);
  res.cookie('jwt', token, {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production'
  });
  // res.redirect('http://localhost:3000/home'); //This should redirect to the users dashboard on successful activation.
});

// signs in users
exports.signin = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError('Please provide email and password', 400));
  }

  const foundOwner = await Owner.findOne({ email })
    .select('+password -__v')
    .lean();

  // if (
  //   !foundOwner ||
  //   !(await foundOwner.correctPassword(password, foundOwner.password))
  // ) {
  //   return next(new AppError(`Incorrect email or password.`, 401));
  // }

  // temporary password check
  if (
    !foundOwner ||
    !(await bcrypt.compare(password, foundOwner.password))
  ) {
    return next(new AppError(`Incorrect email or password.`, 401));
  }

  // createSendToken(foundOwner, 200, req, res);
  const token = signToken(foundOwner._id);
  res.cookie("jwt", token, { httpOnly: true, maxAge: 3600000 });
  res.status(200).json({
    status: 'success',
    token,
    data: {
      user: foundOwner
    }
  });
});

// Gives the admin and owners different permissions.
exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.owner.role)) {
      return next(
        new AppError('You do not have permission to perform this action', 403)
      );
    }
    next();
  };
};
// Logs out the user
exports.signout = (req, res) => {
  res.cookie('jwt', 'loggedout', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true
  });
  res.status(200).json({ message: 'Logged out successfully' });
};

exports.protect = catchAsync(async (req, res, next) => {
  // 1. Getting token and check if it's there
  console.log(req.cookies.jwt)
  let token;
  if (req.cookies && req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    return next(
      new AppError('You are not signed in! Please do so to get access.', 401)
    );
  }
  // 2 Verify token
  const decodedPayload = await promisify(jwt.verify)(
    token,
    process.env.JWT_SECRET
  );

  // Check if user still exist

  const freshOwner = await Owner.findById(decodedPayload.id);

  if (!freshOwner) {
    return next(
      new AppError('The user who has this token no longer exist.', 401)
    );
  }

  // 4. Check if user change password after the JWT was issued
  if (freshOwner.changedPasswordAfter(decodedPayload.iat)) {
    return next(
      new AppError('You recently changed password! Please sign in again.', 401)
    );
  }

  req.owner = freshOwner;
  next();
});
