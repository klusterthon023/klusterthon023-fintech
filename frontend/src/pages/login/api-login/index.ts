import { ApiAxiosInterceptor } from "../../../react-query";
import { ILoginPayload } from "../types";

export const loginUser = async (data: ILoginPayload) => {
  try {
    const response = await ApiAxiosInterceptor.post("/auth/signin", {
      data,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
