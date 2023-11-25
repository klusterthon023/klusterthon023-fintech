const ownerController = require('../controllers/ownerController');
const authController = require('../controllers/authController');
const router = require('express').Router();

router
  .get(
    '/all-owners',
    authController.protect,
    authController.restrictTo('admin'),
    ownerController.getAllOwners
  )
  .get(
    '/owner',
    authController.protect,
    authController.restrictTo('owner'),
    ownerController.getOwner
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

router.patch(
  '/updatePassword',
  authController.protect,
  authController.updatePassword
);
router.patch(
  '/updateOwner',
  authController.protect,
  authController.restrictTo('owner'),
  authController.updateBusinessAccount
);

module.exports = router;
