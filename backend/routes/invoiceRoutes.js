const invoiceController = require('../controllers/invoiceController');
const authController = require('../controllers/authController');

const router = require('express').Router();

// router.use(authController.protect);
// router.use(authController.restrictTo('owner'));

router
  .route('/')
  .get(authController.protect, authController.restrictTo('owner'), invoiceController.getMyInvoices)
  .post(authController.protect, authController.restrictTo('owner'), invoiceController.createInvoice);

router
  .route('/:id')
  .get(authController.protect, authController.restrictTo('owner'), invoiceController.getOneInvoice)
  .patch(authController.protect, authController.restrictTo('owner'), invoiceController.updateInvoice)
  .delete(authController.protect, authController.restrictTo('owner'), invoiceController.deleteOneInvoice);

router
  .route('/:id/pay')
  .post(invoiceController.updateInvoiceToPaid);

module.exports = router;
