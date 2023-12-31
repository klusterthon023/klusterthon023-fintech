import { FormikProps } from "formik";

import md5 from "md5";

export const formikHelper = <T, key extends keyof T>(
  formik: FormikProps<T>,
  value: key
): { helperText: string; status?: "danger" } => {
  return {
    status:
      formik.touched[value] && (formik.errors[value] as string)
        ? "danger"
        : undefined,
    helperText:
      (formik.touched[value] && (formik.errors[value] as string)) || "",
  };
};

export const setDataToLocalStorage = (key: string, data: any) => {
  localStorage.setItem(key, String(data));
};

export const getDataFromLocalStorage = (key: string) =>
  localStorage.getItem(key);

export const removeDataFromLocalStorage = (key: string) =>
  localStorage.removeItem(key);

export const getGravatarImage = (email: string = "") => {
  const hashEmail = md5(email.trim().toLowerCase()).toString();
  return `https://www.gravatar.com/avatar/${hashEmail}`;
};
