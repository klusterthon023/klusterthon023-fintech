const Customer = require('../models/Customer');
const Invoice = require('../models/Invoice');

exports.getDashboardDetails = async (req, res, next) => {
  try {
    const customers = await Customer.find({
      owner_id: req.owner._id
    });
    const totalCustomers = customers.length;

    const invoices = await Invoice.find({ owner_id: req.owner._id });
    const invoicesGenerated = invoices.length;

    const totalInvoicesPaid = await Invoice.find({ owner_id: req.owner._id, status: 'Paid' });

    const totalAmountGenerated = totalInvoicesPaid.reduce((acc, cur) => {
      return acc + cur.total_amount;
    }, 0);

    const numberOfUnpaidInvoices = invoices.length - totalInvoicesPaid.length;

    return res.status(200).json({
      status: 'success',
      data: {
        totalCustomers,
        invoicesGenerated,
        totalAmountGenerated,
        numberOfUnpaidInvoices
      }
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
};
