const mongoose = require("mongoose")

const customerSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Please enter a business name"]
	},
   customer_type: {
      type: String,
      enum: ['Business', 'Individual'],
      required: [true, "Please enter customer type"]
   },
	email: {
		type: String,
		required: [true, "Please enter an email"],
		unique: true
	},
   contact_number: {
      type: String
   },
	business_address: {
		type: String,
		required: [true, "Please enter business address"]
	},
	owner_id: {
		required: [true, "Please enter owner id"],
		type: mongoose.Schema.ObjectId,
		ref: "Owner"
	}
})

module.exports = mongoose.model("Customer", customerSchema)
