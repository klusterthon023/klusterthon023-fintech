export type ISignUpPayload = {
  owner_name: string;
  email: string;
  password: string;
};

export type ISignUpResponse = { status: string, message: string};
