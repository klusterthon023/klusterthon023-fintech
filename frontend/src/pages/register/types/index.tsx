export type ISignUpPayload = {
  business_name: string;
  owner_name: string;
  email: string;
  business_address: string;
  business_description: string;
  password: string;
};

export type ISignUpResponse = { status: string, message: string};
