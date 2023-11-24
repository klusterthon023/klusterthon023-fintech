export type ISignInPayload = {
  email: string;
  password: string;
};

export type ISignInResponse = { token: string };

export type IForgetPasswordPayload = {
  email: string;
};

export type IVerifyTokenPayload = {
  token: string;
};
