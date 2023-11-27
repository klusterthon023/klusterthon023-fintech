import { ApiAxiosInterceptor } from "../../../../../react-query";
import {
  ICreateClientRequest,
  ICreateClientResponse,
  ICreateInvoiceRequest,
  IGetAllInvoices,
  IGetNotifications,
  IGetStatics,
  IResendEmail,
} from "../types";

export const createClient = async (data: ICreateClientRequest) => {
  try {
    const response = await ApiAxiosInterceptor.post<ICreateClientResponse>(
      "/customers",
      data
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createInvoice = async (data: ICreateInvoiceRequest) => {
  try {
    const response = await ApiAxiosInterceptor.post<ICreateClientResponse>(
      "/invoices",
      data
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const resendEmail = async () => {
  try {
    const response = await ApiAxiosInterceptor.post<IResendEmail>(
      "/auth/resendActivationToken"
    );
    return response?.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const showStatics = async () => {
  try {
    const response = await ApiAxiosInterceptor.get<IGetStatics>("/dashboard");
    return response?.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const recentNotifications = async (): Promise<IGetNotifications> => {
  try {
    const response = await ApiAxiosInterceptor.get<IGetNotifications>(
      "/notification?page=1&limit=10"
    );
    return response?.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getRecentTransactions = async () => {
  try {
    const response = await ApiAxiosInterceptor.get<IGetAllInvoices>(
      "/invoices"
    );
    return response?.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
