import { ApiAxiosInterceptor } from "../../../react-query";
import { ILoginPayload, ILoginResponse } from "../types";

export const loginUser = async (data: ILoginPayload) => {
  try {
    const response = await ApiAxiosInterceptor.post<ILoginResponse>(
      "/auth/signin",
      data
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
