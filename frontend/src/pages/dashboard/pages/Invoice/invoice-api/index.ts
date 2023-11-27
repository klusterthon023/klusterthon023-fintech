import { ApiAxiosInterceptor } from "../../../../../react-query";

// export const getAllClient = async (): Promise<{ data: IClientType[] }> => {
//   try {
//     const response = await ApiAxiosInterceptor.get<{ data: IClientType[] }>(
//       "/customers"
//     );
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };

export const getInvoiceById = async (id: string): Promise<{ data: any[] }> => {
  try {
    const response = await ApiAxiosInterceptor.get<{ data: any[] }>(
      `/invoices/${id}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// export const editClient = async ({
//   id,
//   data,
// }: {
//   id: string;
//   data: IClientEditPayload;
// }) => {
//   try {
//     const response = await ApiAxiosInterceptor.patch<any>(
//       `/customers/${id}`,
//       data
//     );
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };

export const deleteInvoice = async (id: string) => {
  try {
    const response = await ApiAxiosInterceptor.delete(`/invoices/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
