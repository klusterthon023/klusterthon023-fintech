const customerController = require('../controllers/customerController');
const authController = require('../controllers/authController');
const { isAccountVerified } = require('../middlewares/isAccountVerfied');

const router = require('express').Router();

router.use(authController.protect);
router.use(authController.restrictTo('owner'));
router
  .route('/')
  .get(customerController.getMyCustomers)
  .post(customerController.createCustomer);

router
  .route('/:id')
  .get(customerController.getOneCustomer)
  .patch(customerController.updateCustomer)
  .delete(customerController.deleteOneCustomer);

module.exports = router;
