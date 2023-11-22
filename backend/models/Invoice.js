const mongoose = require("mongoose")

const invoiceSchema = new mongoose.Schema({
   owner_id: {
		required: [true, "Please enter owner id"],
		type: mongoose.Schema.ObjectId,
		ref: "Owner"
	},
   customer_id: {
		required: [true, "Please enter customer id"],
		type: mongoose.Schema.ObjectId,
		ref: "Customer"
	},
   transcation_details: {
      type: String,
		required: [true, "Please enter transaction details"]
   },
   amount: {
      type: Number,
      required: [true, "Please enter amount"]
   },
   status: {
      type: String,
      enum: ['Pending', 'Paid'],
      default: 'Pending'
   },
   created_date: {
      type: Date,
      default: Date.now()
   },
   due_date: {
      type: Date,
      required: [true, "Please enter due date"]
   },
   date_paid: {
      type: Date
   }
})

module.exports = mongoose.model("Customer", invoiceSchema)
