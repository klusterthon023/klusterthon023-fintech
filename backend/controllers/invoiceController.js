const Invoice = require("../models/Invoice");

exports.getAllInvoices = async (req, res) => {
	try {
		const allInvoices = await Invoice.find({});
		return res.json({
			message: "All Invoices fetched successfully",
			data: allInvoices
		});
	} catch (error) {
		return res.status(500).json({
			message: error.message,
			data: null
		});
	}
};

// //////// Implemented after AUTH
// exports.getMyInvoices = async (req, res) => {
// 	try {
// 		const user = req.user;
// 		const allInvoices = await Invoice.find({ owner_id: user.id });
// 		return res.json({
// 			message: `Invoices for ${user.first_name} ${user.last_name}:`,
// 			data: allInvoices
// 		});
// 	} catch (error) {
// 		return res.status(500).json({
// 			message: error.message,
// 			data: null
// 		});
// 	}
// };

exports.getOneInvoice = async (req, res) => {
	try {
		const InvoiceId = req.params.id;
		const foundInvoice = await Invoice.findById(InvoiceId);
		if (!foundInvoice) {
			return res.status(404).json({
				message: "Invoice not found!",
				data: null
			});
		}

		return res.status(200).json({
			message: "Invoice fetched successfully",
			data: foundInvoice
		});
	} catch (error) {
		return res.status(500).json({
			message: error.message,
			data: null
		});
	}
};

exports.createInvoice = async (req, res) => {
	try {
		// const user = req.user; // After Implementing AUTH

		const newInvoice = await Invoice.create({
			...req.body
			// owner_id: `${req.user.id}` // also after implementing AUTH
		});

		return res.status(201).json({
			message: "Invoice created successfully",
			data: newInvoice
		});
	} catch (error) {
		return res.status(500).json({
			message: error.message,
			data: null
		});
	}
};

exports.updateInvoice = async (req, res) => {
	try {
		const InvoiceId = req.params.id;
		const foundInvoice = await Invoice.findOne({ _id: InvoiceId });
		if (!foundInvoice) {
			return res.status(404).json({
				message: "Invoice not found!",
				data: null
			});
		}
		const updatedInvoice = await Invoice.findOneAndUpdate({ _id: InvoiceId }, req.body);

		return res.status(201).json({
			message: "Invoice Updated successfully",
			data: updatedInvoice
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			data: null
		});
	}
};

exports.deleteOneInvoice = async (req, res) => {
	try {
		const InvoiceId = req.params.id;
		const foundInvoice = await Invoice.findOne({ _id: InvoiceId });
		if (!foundInvoice) {
			return res.status(404).json({
				message: "Invoice not found!",
				data: null
			});
		}

		const deletedInvoice = await Invoice.findByIdAndDelete(InvoiceId);

		return res.status(204).json({
			message: "Invoice deleted successfully",
			data: null
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			data: null
		});
	}
};
