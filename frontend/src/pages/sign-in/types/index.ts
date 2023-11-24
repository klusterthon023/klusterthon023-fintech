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

export type IResetPasswordPayload = {
  password: string;
};

export enum ResetPasswordFlowEnum {
  FORGET_PASSWORD = "forget-password",
  VERIFY_PASSWORD = "verify-password",
  RESET_PASSWORD = "reset-password",
  SUCCESS = "success",
}
