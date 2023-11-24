const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const bcrypt = require('bcrypt'); //temporary import

const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const Owner = require('../models/Owner');
const Email = require('../utils/email');

// signing the jwt token
const signToken = (id, expiresin) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: expiresin
  });
};

// refactored the feedback
const createSendToken = (foundUser, statusCode, req, res) => {
  const token = signToken(foundUser._id, process.env.JWT_EXPIRES_IN);

  res.cookie('jwt', token, {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production'
  });
  // removes the password from the output
  delete foundUser._doc.password;
  res.status(statusCode).json({
    status: 'success',
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

  // const newOwnerDetails = {
  //   business_name: req.body.business_name,
  //   owner_name: req.body.owner_name,
  //   email: req.body.email,
  //   business_address: req.body.business_address,
  //   business_description: req.body.business_description,
  //   contact_number: req.body.contact_number,
  //   password: req.body.password,
  //   activationToken,
  //   activationTokenExpire
  // };

  const newOwnerDetails = {
    owner_name: req.body.owner_name,
    email: req.body.email,
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

exports.resendActivationToken = catchAsync(async (req, res, next) => {
  const urlActivationToken = crypto.randomBytes(32).toString('hex');
  const activationToken = crypto
    .createHash('sha256')
    .update(urlActivationToken)
    .digest('hex');
  const activationTokenExpire = Date.now() + 20 * 60 * 1000;
  const newOwner = await Owner.findById(req.owner._id);

  newOwner.activationTokenExpire = activationTokenExpire;
  newOwner.activationToken = activationToken;

  await newOwner.save({ validateBeforeSave: false });

  const url = `${req.protocol}://${req.get(
    'host'
  )}/v1/auth/activate/${urlActivationToken}`;
  try {
    await new Email(newOwner, url).sendActivation();
    return res.status(201).json({
      status: 'success',
      message: 'Please check your email and activate your account.'
    });
  } catch (err) {
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
  const token = signToken(owner._id, process.env.JWT_EXPIRES_IN);
  res.cookie('jwt', token, {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production'
  });
  res.status(200).json({
    status: 'success',
    message: 'Account created!'
  });
  // res.redirect('http://localhost:3000/home'); //This should redirect to the users dashboard on successful activation.
});

// signs in users
exports.signin = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError('Please provide email and password', 400));
  }

  const foundOwner = await Owner.findOne({ email }).select('+password -__v');

  if (
    !foundOwner ||
    !(await foundOwner.correctPassword(password, foundOwner.password))
  ) {
    return next(new AppError(`Incorrect email or password.`, 401));
  }

  createSendToken(foundOwner, 200, req, res);
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
  // console.log(req.cookies.jwt)

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

exports.forgotPassword = catchAsync(async (req, res, next) => {
  // 1. Get user based on posted email\

  if (!req.body.email) {
    return next(new AppError('Please provide an email!', 400));
  }

  const owner = await Owner.findOne({ email: req.body.email });

  if (!owner) {
    return next(new AppError('There is no user with that email.', 404));
  }

  // 2. Generate the random reset token
  const resetToken = owner.createPasswordResetToken();
  await owner.save({ validateBeforeSave: false });

  // 3. Send it to user email.
  try {
    await new Email(owner).sendPasswordReset(resetToken);
    const signResetToken = (resetEmail, expiresin) => {
      return jwt.sign({ resetEmail }, process.env.JWT_SECRET, {
        expiresIn: expiresin
      });
    };
    const resetEmail = signResetToken(req.body.email, '10m');

    res.cookie('resetEmail', resetEmail, {
      expires: new Date(Date.now() + 10 * 60 * 1000),
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production'
    });

    res.status(200).json({
      status: 'success',
      message: 'A reset token was sent your email!'
    });
  } catch (err) {
    // console.log(err);
    owner.passwordResetToken = undefined;
    owner.passwordResetExpires = undefined;
    await owner.save({ validateBeforeSave: false });

    return next(
      new AppError(
        'There was an error sending the email. Try again later!',
        500
      )
    );
  }
});

exports.verifyPasswordResetToken = catchAsync(async (req, res, next) => {
  const hashedToken = crypto
    .createHash('sha256')
    .update(req.body.token)
    .digest('hex');
  const owner = await Owner.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() }
  });
  if (!owner) {
    return next(
      new AppError('Invalid token or expired token, click resend.', 400)
    );
  }
  const signResetToken = (resetToken, expiresin) => {
    return jwt.sign({ resetToken }, process.env.JWT_SECRET, {
      expiresIn: expiresin
    });
  };
  const resetToken = signResetToken(hashedToken, '10m');
  res.cookie('resetToken', resetToken, {
    expires: new Date(Date.now() + 10 * 60 * 1000),
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production'
  });
  return res.status(200).json({
    status: 'success',
    message: 'Token verified!'
  });
});

exports.resendToken = catchAsync(async (req, res, next) => {
  let token;
  if (req.cookies && req.cookies.resetEmail) {
    token = req.cookies.resetEmail;
  }
  if (!token) {
    return next(new AppError('Bad email cookie', 400));
  }

  const decodedPayload = await promisify(jwt.verify)(
    token,
    process.env.JWT_SECRET
  );

  const owner = await Owner.findOne({ email: decodedPayload.resetEmail });

  if (!owner) {
    return next(new AppError('Bad email cookie.', 404));
  }

  // 2. Generate the random reset token
  const resetToken = owner.createPasswordResetToken();
  await owner.save({ validateBeforeSave: false });

  // 3. Send it to user email.
  try {
    await new Email(owner).sendPasswordReset(resetToken);
    res.status(200).json({
      status: 'success',
      message: 'Another reset token was sent your email!'
    });
  } catch (err) {
    // console.log(err);
    owner.passwordResetToken = undefined;
    owner.passwordResetExpires = undefined;
    await owner.save({ validateBeforeSave: false });

    return next(
      new AppError(
        'There was an error sending the email. Try again later!',
        500
      )
    );
  }
});

exports.resetPassword = catchAsync(async (req, res, next) => {
  // Get user based on the token
  const cookieHeader = req.headers.cookie;
  console.log(cookieHeader, req.headers);
  let token;
  if (req.cookies && req.cookies.resetToken) {
    token = req.cookies.resetToken;
  } else if (cookieHeader) {
    if (cookieHeader) {
      // Parse the 'cookie' header to extract individual cookies
      const cookies = cookieHeader.split('; ').reduce((acc, cookie) => {
        const [name, value] = cookie.split('=');
        acc[name] = value;
        return acc;
      }, {});
      token = cookies.resetToken;
    }
  }
  if (!token) {
    return next(new AppError('Password reset session has expired', 400));
  }

  const decodedPayload = await promisify(jwt.verify)(
    token,
    process.env.JWT_SECRET
  );

  const owner = await Owner.findOne({
    passwordResetToken: decodedPayload.resetToken
  });

  // if owner exists update the owner.
  owner.password = req.body.password;
  owner.passwordResetExpires = undefined;
  owner.passwordResetToken = undefined;
  owner.passwordChangedAt = Date.now();
  await owner.save();
  // Update changedPasswordAt property for the user

  // log the user in, send JWT
  createSendToken(owner, 200, req, res);
});

exports.updatePassword = catchAsync(async (req, res, next) => {
  // Get the user from the collection
  const owner = await Owner.findById(req.owner._id).select('+password');
  // Check if POSTed current password is correct
  if (
    !(await owner.correctPassword(req.body.passwordCurrent, owner.password))
  ) {
    return next(new AppError('Current password is not correct.', 401));
  }
  // If so, update password
  owner.password = req.body.password;

  await owner.save();

  // Log user in send JWT
  createSendToken(owner, 200, req, res);
});

exports.updateBusinessAccount = catchAsync(async (req, res, next) => {
  if (req.body.password) {
    return next(new AppError('This form is not for password updating.', 401));
  }

  const ownerNewDetails = {
    business_name: req.body.business_name,
    owner_name: req.body.owner_name,
    email: req.body.email,
    business_address: req.body.business_address,
    business_description: req.body.business_description,
    contact_number: req.body.contact_number
  };

  const updatedOwner = await Owner.findByIdAndUpdate(
    req.owner._id,
    ownerNewDetails,
    {
      new: true,
      runValidators: true
    }
  );

  res.status(200).json({
    status: 'success',
    data: {
      owner: updatedOwner
    }
  });
});
