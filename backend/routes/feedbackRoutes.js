const feedbackController = require('../controllers/feedbackController');
const authController = require('../controllers/authController');

const router = require('express').Router();

router
  .route('/')
  .post(feedbackController.createFeedback)
  .get(
    authController.protect,
    authController.restrictTo('admin'),
    feedbackController.getFeedbacks
  );

router
  .route('/:id')
  .get(authController.protect, authController.restrictTo('admin'));

module.exports = router;
