import { ApiAxiosInterceptor } from "../../../../../react-query";
import {
  ICreateClientRequest,
  ICreateClientResponse,
  ICreateInvoiceRequest,
  IGetNotifications,
  IGetStatics,
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
      "/notification?page=1&limit=3"
    );
    return response?.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
