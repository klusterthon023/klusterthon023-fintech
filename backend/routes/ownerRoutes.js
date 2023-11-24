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
  .get('/activate/:token', authController.activateAccount)
  .post('/signin', authController.signin)
  .get('/signout', authController.signout);
router.post(
  '/resendActivationToken',
  authController.protect,
  authController.resendActivationToken
);
router.post('/forgotPassword', authController.forgotPassword);
router.post('/resendToken', authController.resendToken);
router.post(
  '/verifyPasswordResetToken',
  authController.verifyPasswordResetToken
);
router.patch('/resetPassword', authController.resetPassword);

module.exports = router;
