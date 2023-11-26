export type IClientType = {
  business_address: string;
  created_date: string;
  customer_type: string;
  email: string;
  id: string;
  name: string;
  owner_id: string;
  _id: string;
};

export type IClientEditPayload = {
  name: string;
  email: string;
  customer_type: string;
  phone_number: string;
  business_address: string;
};
