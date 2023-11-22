const router = require("express").Router();
const ownerController = require("../controllers/ownerController");

router
	.get("/all-owners", ownerController.getAllOwners)
	.post("/register", ownerController.register)
	.post("/signin", ownerController.signin)
	.get("/signout", ownerController.signout);

module.exports = router;
