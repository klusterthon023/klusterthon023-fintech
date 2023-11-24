import { ApiAxiosInterceptor } from "../../../react-query";
import { ISignInPayload, ISignInResponse } from "../types";

export const loginUser = async (data: ISignInPayload) => {
  try {
    const response = await ApiAxiosInterceptor.post<ISignInResponse>(
      "/auth/signin",
      data
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
