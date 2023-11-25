const Customer = require('../models/Customer');
const Invoice = require('../models/Invoice');

exports.getDashboardDetails = async (req, res, next) => {
  try {
    const totalCustomers = await Customer.countDocuments({
      owner_id: req.owner._id
    });
    const invoicesGenerated = await Invoice.countDocuments({
      owner_id: req.owner._id
    });

    const invoices = await Invoice.find({ owner_id: req.owner._id });
    const totalAmountGenerated = invoices.reduce((acc, cur) => {
      if (cur.status === 'Paid') {
        return acc + cur.total_amount;
      }
    }, 0);

    const numberOfUnpaidInvoices = await Invoice.countDocuments({
      owner_id: req.owner._id,
      status: 'unpaid'
    });
    const totalAmountOutstanding = invoices.reduce((acc, cur) => {
      if (cur.status !== 'Paid') {
        return acc + cur.total_amount;
      }
    });

    return res.status(200).json({
      status: 'success',
      data: {
        totalCustomers,
        invoicesGenerated,
        totalAmountGenerated,
        numberOfUnpaidInvoices,
        totalAmountOutstanding
      }
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
};
