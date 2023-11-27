import { ApiAxiosInterceptor } from "../../../react-query";

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
