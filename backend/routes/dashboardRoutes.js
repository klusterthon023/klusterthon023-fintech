const router = require('express').Router();
const dashboardController = require('../controllers/dashboardController');
const authController = require('../controllers/authController');

router.get('/', authController.protect, dashboardController.getStats);

module.exports = router;
