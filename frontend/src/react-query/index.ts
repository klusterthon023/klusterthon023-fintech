import axios from "axios";

const baseURL = import.meta.env.VITE_APP_API_BASE_URL;

export const ApiAxiosInterceptor = axios.create({
  baseURL: baseURL,
  // withCredentials: true,
});
