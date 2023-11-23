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

const AppError = require('../utils/appError');
const handleDuplicateDB = (err) => {
  const value = err.message.match(/(['"])(?:(?:(?<=\\)\1|[^\\])*?)\1/);
  //const value = err.keyValue.name
  const message = `Duplicate field value: ${value}. Please use another value`;
  return new AppError(message, 400);
};

const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack
  });
};

const sendErrorProd = (err, res) => {
  // Operational, trusted error: send message to client
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message
    });

    // Programming or other unknown error: don't leak error details
  } else {
    // 1) Log error
    console.error('ERROR 💥', err);

    // 2) Send generic message
    res.status(500).json({
      status: 'error',
      message: 'Something went very wrong!'
    });
  }
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';
  let error = err;
  console.log(error);
  if (process.env.NODE_ENV === 'development') {
    // if (error.name === 'ValidationError') error = handlePasswordError(error);
    if (error.code === 11000) error = handleDuplicateDB(error);
    sendErrorDev(error, res);
  } else if (process.env.NODE_ENV === 'production') {
    sendErrorProd(error, res);
  }
};
