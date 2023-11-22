const mongoose = require("mongoose")

const ownerSchema = new mongoose.Schema({
	business_name: {
		type: String,
		required: [true, "Please enter a fbusiness name"]
	},
	owner_name: {
		type: String,
		required: [true, "Please enter the name of business owner"]
	},
	email: {
		type: String,
		required: [true, "Please enter an email"],
		unique: true
	},
	business_address: {
		type: String,
		required: [true, "Please enter business address"]
	},
   business_description: {
		type: String,
		required: [true, "Please enter business description"]
	},
	password: {
		type: String,
		required: [true, "Please enter a password"],
		minlength: [6, "Minimum password length is 6 characters"]
	},
   contact_number: {
      type: String
   },
   services: {
      type: [String],
      default: []
   }
})

module.exports = mongoose.model("Owner", ownerSchema)
