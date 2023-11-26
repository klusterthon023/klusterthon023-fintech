const Customer = require('../models/Customer');
const Invoice = require('../models/Invoice');
const catchAsync = require('../utils/catchAsync');

const calculatePercentage = (numberOfClientsPerMonth, prop) => {
  const monthYears = Object.keys(numberOfClientsPerMonth);
  const lastMonthCount =
    numberOfClientsPerMonth[monthYears[monthYears.length - 1]][prop];
  const secondToLastMonthCount =
    numberOfClientsPerMonth[monthYears[monthYears.length - 2]][prop];
  console.log(prop, lastMonthCount, secondToLastMonthCount);
  const percentageChange =
    ((lastMonthCount - secondToLastMonthCount) / secondToLastMonthCount) * 100;

  return percentageChange.toFixed(2) * 1;
};

exports.getStats = catchAsync(async (req, res, next) => {
  const invoices = await Invoice.find({ owner_id: req.owner._id }).populate(
    'customers'
  );
  const customers = await Customer.find({ owner_id: req.owner._id });
  console.log(!!invoices, !!customers);
  // For client Logic
  let percentageChangeInNumberOFClients = 0;
  let numberOfClientsPerMonth = {};
  if (customers && customers.length > 0) {
    numberOfClientsPerMonth = calculateStatsPerMonth(customers, 'customer');
    percentageChangeInNumberOFClients = calculatePercentage(
      numberOfClientsPerMonth,
      'count'
    );
  }

  // For invoices Logic
  let paidInvoices = [];
  let unpaidInvoices = [];
  let numUnpaidInvoices = 0;
  let totalRevenueGenerated = 0;
  let totalAmountOutstanding = 0;
  let groupedByMonthForBusiness = {};
  let groupedByMonthForIndividual = {};
  let totalRevenuePerMonth = {};
  let totalAmountOutstandingPerMonth = {};
  let numberOfInvoicesPerMonth = {};
  let percentageChangeInNumberOfInvoices = 0;
  let percentageChangeInRevenue = 0;
  let percentageChangeInOutstanding = 0;

  // For Invoices

  if (invoices && invoices.length > 0) {
    const BusinessInvoices = invoices.filter(
      (invoice) => invoice.customers[0].customer_type === 'Business'
    );
    const IndividualInvoices = invoices.filter(
      (invoice) => invoice.customers[0].customer_type === 'Individual'
    );
    paidInvoices = invoices.filter((invoice) => invoice.status === 'Paid');
    unpaidInvoices = invoices.filter((invoice) => invoice.status !== 'Paid');
    numUnpaidInvoices = invoices.length - paidInvoices.length;
    paidInvoices.forEach((invoice) => {
      totalRevenueGenerated = totalRevenueGenerated + invoice.total_amount;
    });
    unpaidInvoices.forEach((invoice) => {
      totalAmountOutstanding = totalAmountOutstanding + invoice.total_amount;
    });
    groupedByMonthForBusiness = calculateStatsPerMonth(
      BusinessInvoices,
      'invoice'
    );
    groupedByMonthForIndividual = calculateStatsPerMonth(
      IndividualInvoices,
      'invoice'
    );
    totalRevenuePerMonth = calculateStatsPerMonth(paidInvoices, 'invoice');
    totalAmountOutstandingPerMonth = calculateStatsPerMonth(
      unpaidInvoices,
      'invoice'
    );
    numberOfInvoicesPerMonth = calculateStatsPerMonth(
      invoices,
      'totalinvoices'
    );

    percentageChangeInNumberOfInvoices = calculatePercentage(
      numberOfInvoicesPerMonth,
      'count'
    );
    percentageChangeInRevenue = calculatePercentage(
      totalRevenuePerMonth,
      'revenue'
    );

    percentageChangeInOutstanding = calculatePercentage(
      totalAmountOutstandingPerMonth,
      'unpaid'
    );
  }

  res.status(200).json({
    status: 'success',
    groupedByMonthForBusiness,
    groupedByMonthForIndividual,
    numberOfClientsPerMonth,
    percentageChangeInNumberOFClients,
    numberOfClients: customers.length,
    numberOfInvoicesPerMonth,
    percentageChangeInNumberOfInvoices,
    numberOfInvoices: invoices.length,
    numberOfPaidInvoices: paidInvoices.length,
    numberOfUnpaidInvoices: numUnpaidInvoices,
    totalRevenueGenerated,
    totalRevenuePerMonth,
    percentageChangeInRevenue,
    totalAmountOutstanding,
    totalAmountOutstandingPerMonth,
    percentageChangeInOutstanding
  });
});
