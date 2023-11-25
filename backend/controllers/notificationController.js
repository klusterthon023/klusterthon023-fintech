const Notification = require('../models/Notifications');
const catchAsync = require('../utils/catchAsync');

exports.getOwnerNotifications = catchAsync(async (req, res, next) => {
  const page = req.query.page * 1 || 1;
  const limit = req.query.limit * 1 || 10;
  const skip = limit * page - limit;
  const notifications = await Notification.find({ owner: req.owner._id })
    .skip(skip)
    .limit(limit);

  res.status(200).json({
    status: 'sucess',
    notifications
  });
});

exports.getOneNotification = catchAsync(async (req, res, next) => {
  const notification = await Notification.findOne({ _id: req.params.id });
  res.status(200).json({
    status: 'sucess',
    notification
  });
});
