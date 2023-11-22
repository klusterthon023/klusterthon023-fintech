const Customer = require("../models/Customer");
const mongoose = require("mongoose");

exports.getAllCustomers = async (req, res) => {
	try {
		const allCustomers = await Customer.find({});
		return res.json({
			message: "All Customers fetched successfully",
			data: allCustomers
		});
	} catch (error) {
		return res.status(500).json({
			message: error.message,
			data: null
		});
	}
};

// //////// Implemented after AUTH
// exports.getMyCustomers = async (req, res) => {
// 	try {
// 		const user = req.user;
// 		const allCustomers = await Customer.find({ owner_id: user.id });
// 		return res.json({
// 			message: `Customers for ${user.first_name} ${user.last_name}:`,
// 			data: allCustomers
// 		});
// 	} catch (error) {
// 		return res.status(500).json({
// 			message: error.message,
// 			data: null
// 		});
// 	}
// };

exports.getOneCustomer = async (req, res) => {
	try {
		const customerId = req.params.id;
		const foundCustomer = await Customer.findById(customerId);
		if (!foundCustomer) {
			return res.status(404).json({
				message: "Customer not found!",
				data: null
			});
		}

		return res.status(200).json({
			message: "Customer fetched successfully",
			data: foundCustomer
		});
	} catch (error) {
		return res.status(500).json({
			message: error.message,
			data: null
		});
	}
};

exports.createCustomer = async (req, res) => {
	try {
		// const user = req.user; // After Implementing AUTH

		const newCustomer = await Customer.create({
			...req.body
			// owner_id: `${req.user.id}` // also after implementing AUTH
		});

		return res.status(201).json({
			message: "Customer created successfully",
			data: newCustomer
		});
	} catch (error) {
		return res.status(500).json({
			message: error.message,
			data: null
		});
	}
};

exports.updateCustomer = async (req, res) => {
	try {
		const customerId = req.params.id;
		const foundCustomer = await Customer.findOne({ _id: customerId });
		if (!foundCustomer) {
			return res.status(404).json({
				message: "Customer not found!",
				data: null
			});
		}
		const updatedCustomer = await Customer.findOneAndUpdate({ _id: customerId }, req.body);

		return res.status(201).json({
			message: "Customer Updated successfully",
			data: updatedCustomer
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			data: null
		});
	}
};

exports.deleteOneCustomer = async (req, res) => {
	try {
		const customerId = req.params.id;
		const foundCustomer = await Customer.findOne({ _id: customerId });
		if (!foundCustomer) {
			return res.status(404).json({
				message: "Customer not found!",
				data: null
			});
		}

		const deletedCustomer = await Customer.findByIdAndDelete(customerId);

		return res.status(204).json({
			message: "Customer deleted successfully",
			data: null
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			data: null
		});
	}
};
