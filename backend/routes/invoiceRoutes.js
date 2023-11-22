const router = require("express").Router();
const invoiceController = require("../controllers/invoiceController");

router
	.get("/", invoiceController.getAllInvoices)
	.get("/:id", invoiceController.getOneInvoice)
	.post("/", invoiceController.createInvoice)
	.put("/:id", invoiceController.updateInvoice)
	.delete("/:id", invoiceController.deleteOneInvoice);

module.exports = router;
