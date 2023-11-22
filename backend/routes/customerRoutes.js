const router = require("express").Router();
const customerController = require("../controllers/customerController");

router
	.get("/", customerController.getAllCustomers)
	.get("/:id", customerController.getOneCustomer)
	.post("/", customerController.createCustomer)
	.put("/:id", customerController.updateCustomer)
	.delete("/:id", customerController.deleteOneCustomer);

module.exports = router;
