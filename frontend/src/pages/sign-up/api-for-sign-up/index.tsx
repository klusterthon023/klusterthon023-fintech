import { ApiAxiosInterceptor } from "../../../react-query";
import { ISignUpPayload, ISignUpResponse } from "../types";

export const signupUser = async (data: ISignUpPayload) => {
  try {
    const response = await ApiAxiosInterceptor.post<ISignUpResponse>(
      "/auth/register",
      data
    );
    return response.data;
  } catch (error) {
    throw new Error("An error occurred.");
  }
};
