const router = require('express').Router();
const ownerController = require('../controllers/ownerController');
const authController = require('../controllers/authController');

router
  .get(
    '/all-owners',
    authController.protect,
    authController.restrictTo('admin'),
    ownerController.getAllOwners
  )
  .post('/register', authController.register)
  .get('/activate/:token', authController.activate)
  .post('/signin', authController.signin)
  .get('/signout', authController.signout);

module.exports = router;
