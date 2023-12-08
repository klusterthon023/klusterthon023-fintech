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
  description: string;
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

export type IProduct = {
  product_name: string;
  quantity: number;
  unit_price: number;
  _id: string;
};

export type Customer = {
  _id: string;
  name: string;
  customer_type: "Business" | "Individual";
  email: string;
  business_address: string;
  owner_id: string;
  __v: number;
  created_date: string;
  phone_number: string;
  id: string;
};

export type IInvoice = {
  _id: string;
  owner_id: string;
  customer_id: string;
  transcation_details: string;
  products: Product[];
  client_name: string;
  customers: Customer[];
  total_amount: number;
  status: "Pending" | "Paid";
  created_date: string;
  due_date: string;
  paymentToken: string;
  __v: number;
  id: string;
};

export type IGetAllInvoices = {
  message: string;
  data: IInvoice[];
};

export type IUpdateProfile = {
  status: string;
  data: {
    owner: {
      _id: string;
      business_name: string;
      owner_name: string;
      created_date: string;
      email: string;
      business_address: string;
      business_description: string;
      contact_number: string;
      active: boolean;
      role: string;
      __v: number;
      passwordChangedAt: string;
    };
  };
};
