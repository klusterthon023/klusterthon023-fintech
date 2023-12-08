import { ApiAxiosInterceptor } from "../../../axios";
import { ISignUpPayload, ISignUpResponse } from "../types";

export const signupUser = async (data: ISignUpPayload) => {
  try {
    const response = await ApiAxiosInterceptor.post<ISignUpResponse>(
      "/auth/register",
      data
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
