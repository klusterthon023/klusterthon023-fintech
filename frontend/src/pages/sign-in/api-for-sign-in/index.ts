import { ApiAxiosInterceptor } from "../../../react-query";
import {
  IForgetPasswordPayload,
  IResetPasswordPayload,
  ISignInPayload,
  ISignInResponse,
  IVerifyTokenPayload,
} from "../types";

export const loginUser = async (data: ISignInPayload) => {
  try {
    const response = await ApiAxiosInterceptor.post<ISignInResponse>(
      "/auth/signin",
      data
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const forgetPassword = async (data: IForgetPasswordPayload) => {
  try {
    const response = await ApiAxiosInterceptor.post<any>(
      "/auth/forgotPassword",
      data
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const verifyToken = async (data: IVerifyTokenPayload) => {
  try {
    const response = await ApiAxiosInterceptor.post<any>(
      "/auth/verifyPasswordResetToken",
      data
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const resetPassword = async (data: IResetPasswordPayload) => {
  try {
    const response = await ApiAxiosInterceptor.patch<any>(
      "/auth/resetPassword",
      data
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const resendToken = async () => {
  try {
    const response = await ApiAxiosInterceptor.post<any>("/auth/resendToken");
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
