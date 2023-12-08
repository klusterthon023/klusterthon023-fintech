import { ApiAxiosInterceptor } from "../../../axios";
import { IInvoice } from "../../dashboard/pages/Dashboard/types";

export const paymentForInvoice = async (token: string) => {
  try {
    const response = await ApiAxiosInterceptor.post<any>(
      `/invoices/${token}/pay`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getAllInvoices = async (): Promise<{ data: IInvoice[] }> => {
  try {
    const response = await ApiAxiosInterceptor.get<{ data: IInvoice[] }>(
      `/invoices/all-invoices`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
