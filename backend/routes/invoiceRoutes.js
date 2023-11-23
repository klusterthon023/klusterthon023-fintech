const invoiceController = require('../controllers/invoiceController');
const authController = require('../controllers/authController');

const router = require('express').Router();

router.use(authController.protect);
router.use(authController.restrictTo('owner'));
router
  .route('/')
  .get(invoiceController.getMyInvoices)
  .post(invoiceController.createInvoice);

router
  .route('/:id')
  .get(invoiceController.getOneInvoice)
  .patch(invoiceController.updateInvoice)
  .delete(invoiceController.deleteOneInvoice);

module.exports = router;
