const Feedback = require('../models/Feedback');
const catchAsync = require('../utils/catchAsync');

exports.getFeedbacks = catchAsync(async (req, res, next) => {
  const page = req.query.page * 1 || 1;
  const limit = req.query.limit * 1 || 10;
  const skip = limit * page - limit;
  const feedbacks = await Feedback.find({}).skip(skip).limit(limit);

  res.status(200).json({
    status: 'sucess',
    feedbacks
  });
});

exports.createFeedback = catchAsync(async (req, res, next) => {
  const { name, email, details, create_date } = req.body;
  const feedback = await Feedback.create({ name, email, details, create_date });
  res.status(200).json({
    status: 'sucess',
    feedback
  });
});

exports.getOneFeedback = catchAsync(async (req, res, next) => {
  const feedback = await Feedback.findOne({ _id: req.params.id });
  res.status(200).json({
    status: 'sucess',
    feedback
  });
});
