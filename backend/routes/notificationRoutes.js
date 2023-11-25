const ownerController = require('../controllers/ownerController');
const notificationController = require('../controllers/notificationController');
const authController = require('../controllers/authController');
const router = require('express').Router();

router
  .route('/')
  .get(authController.protect, notificationController.getOwnerNotifications);

router
  .route('/:id')
  .get(authController.protect, notificationController.getOneNotification);
module.exports = router;
