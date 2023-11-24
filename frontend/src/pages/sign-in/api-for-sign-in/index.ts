import { ApiAxiosInterceptor } from "../../../react-query";
import {
  IForgetPasswordPayload,
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

export const verifyToken = async (data: any) => {
  try {
    const response = await ApiAxiosInterceptor.post<any>(
      "/auth/resetPassword",
      data
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const resetPassword = async (data: IVerifyTokenPayload) => {
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
