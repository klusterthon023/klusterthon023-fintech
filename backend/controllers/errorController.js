const AppError = require('./../utils/appError');

const handleCastErrorDB = (err) => {
  const message = `Invalid ${err.path}: ${err.value}.`;
  return new AppError(message, 400);
};
const handleJWTError = () =>
  new AppError('Invalid token. Please log in again!', 401);
const handleJWTExpiredError = () =>
  new AppError('Your token has expired! Please log in again.', 401);
const handleDuplicateDB = (err) => {
  // const value = err.message.match(/[^@\s]+@[^@\s]+\.[^@\s]+/);
  //const value = err.keyValue.name
  const message = `Email already exists, please use another one.`;
  return new AppError(message, 400);
};
const handleValidationErrorDb = (err) => {
  const errors = Object.values(err.errors).map((el) => el.message);
  const message = `Invalid input data. ${errors.join('. ')}`;
  return new AppError(message, 400);
};

const sendErrorDev = (err, req, res) => {
  // console.log('this is ', req.url);
  if (req.originalUrl.startsWith('/v1')) {
    return res.status(err.statusCode).json({
      status: err.status,
      error: err,
      message: err.message,
      stack: err.stack
    });
  }
  console.error('ERROR ', err);
  return res.status(err.statusCode).render('error', {
    title: 'Something went wrong!',
    msg: err.message
  });
};

const sendErrorProd = (err, req, res) => {
  //API
  if (req.originalUrl.startsWith('/v1')) {
    //Operational Error
    if (err.isOperational) {
      return res.status(err.statusCode).json({
        status: err.status,
        message: err.message
      });
    }

    console.error('ERROR', err);
    //Programming or other unknown error
    //Send generic message.
    return res.status(500).json({
      status: 'error',
      message: 'Something went very wrong!'
    });
  }

  //Programming or other unknown error
  console.error('ERROR ', err);
  //Send generic message.
  return res.status(err.statusCode).render('error', {
    title: 'Something went wrong',
    msg: 'Please try again later. '
  });
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, req, res);
  } else if (process.env.NODE_ENV === 'production') {
    let error = err;
    if (error.name === 'CastError') error = handleCastErrorDB(error);
    if (error.code === 11000) error = handleDuplicateDB(error);
    if (error.name === 'ValidationError')
      error = handleValidationErrorDb(error);
    if (error.name === 'JsonWebTokenError') error = handleJWTError();
    if (error.name === 'TokenExpiredError') error = handleJWTExpiredError();
    sendErrorProd(error, req, res);
  }
};

// If we are enforcing any password pattern or rules
// function handlePasswordError(err) {
//     let message = err[Object.keys(err)[0]][Object.keys(err[Object.keys(err)[0]])[0]].message;

//     if (Object.keys(err[Object.keys(err)[0]])[0] === 'password') {
//       if (err[Object.keys(err)[0]][Object.keys(err[Object.keys(err)[0]])[0]].kind === 'regexp') {
//         message =
//           'Password must contain aleast One of A-Z, a-z, 0-9 and any of these: "@ $ ! % * ? & ."';
//       } else {
//         message = 'Password is too short! Password must be 8 characters long or more.';
//       }
//     }
//     return new AppError(message, 400);
//   }
