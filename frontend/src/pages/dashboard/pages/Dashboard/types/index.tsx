export type ICreateClientRequest = {
  name: string;
  customer_type: string;
  email: string;
  business_address: string;
};

export type ICreateClientResponse = {
  message: string;
  data: {
    name: string;
    customer_type: string;
    email: string;
    business_address: string;
    owner_id: string;
    _id: string;
    __v: number;
  };
};

export type Product = {
  product_name: string;
  quantity: number;
  unit_price: number;
};

export type ICreateInvoiceRequest = {
  customer_id: string;
  transcation_details: string;
  products: Product[];
  due_date: string;
};

export type IGetStatics = {
  groupedByMonthForBusiness: Object;
  groupedByMonthForIndividual: Object;
  numberOfClients: number;
  numberOfClientsPerMonth: Object;
  numberOfInvoices: number;
  numberOfInvoicesPerMonth: Object;
  numberOfPaidInvoices: number;
  numberOfUnpaidInvoices: number;
  percentageChangeInNumberOFClients: number;
  percentageChangeInNumberOfInvoices: number;
  percentageChangeInOutstanding: number;
  percentageChangeInRevenue: number;
  status: string;
  totalAmountOutstanding: number;
  totalAmountOutstandingPerMonth: Object;
  totalRevenueGenerated: number;
  totalRevenuePerMonth: Object;
};

export type notifications = {
  _id: string;
  notification_type: string;
  owner: string;
  description: string;
  createAt: string;
  __v: number;
  id: string;
};

export type IGetNotifications = {
  status: string;
  notifications: notifications[];
};

export type IResendEmail = {
  status: string;
  message: string;
};
