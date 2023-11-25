import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import { useMutation } from "react-query";
import { Button, Input, Typography } from "../../../../../design-system";
import { createInvoice } from "../api-dashboard";
import { formikHelper } from "../../../../../utils/helper";
import { toast } from "react-toastify";
import { Product } from "../types";

interface FormValues {
  customer_id: string;
  transcation_details: string;
  products: Product[];
  due_date: string;
}

interface AxiosError {
  response?: {
    data?: {
      message?: string;
    };
  };
}

const validationSchema = Yup.object().shape({
  customer_id: Yup.string(),
});

export default function CreateInvoice() {
  const initialValues: FormValues = {
    customer_id: "",
    transcation_details: "",
    products: [],
    due_date: "",
  };

  const { mutateAsync, isLoading, isError, error } = useMutation(createInvoice);

  const handleSubmit = async (
    values: FormValues,
    FormikHelpers: FormikHelpers<FormValues>
  ) => {
    console.log(values);
    try {
      const result = await mutateAsync(values);
      console.log(result);
      toast(result?.message);
      FormikHelpers.resetForm();
    } catch (error) {
      console.error(error);
    }
  };

  const axiosError = error as AxiosError;

  return (
    <section className="">
      <Typography className="!text-3xl !font-semibold">New Invoice</Typography>
      <>
        {isError && error && (
          <div className="p-2 mb-5 flex justify-center items-center bg-color-red rounded-lg">
            <Typography variant="body3" color="white">
              {axiosError?.response?.data?.message}
            </Typography>
          </div>
        )}
      </>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => {
          const { getFieldProps } = formik;

          return (
            <Form className="grid gap-5 placeholder:text-gray-100">
              <Input
                placeholder="Customer ID"
                {...getFieldProps("customer_id")}
                {...formikHelper(formik, "customer_id")}
                className=" placeholder:text-sm"
              />

              <Input
                type="text"
                placeholder="Transaction details"
                {...getFieldProps("transcation_details")}
                {...formikHelper(formik, "transcation_details")}
                className=" placeholder:text-sm"
              />

              <Input
                type="text"
                placeholder="Products"
                {...getFieldProps("products")}
                {...formikHelper(formik, "products")}
                className=" placeholder:text-sm"
              />
              <Input
                type="text"
                placeholder="Due Date"
                {...getFieldProps("due_date")}
                {...formikHelper(formik, "due_date")}
                className=" placeholder:text-sm"
              />

              <Button type="submit" loading={isLoading} fullWidth>
                Save
              </Button>
            </Form>
          );
        }}
      </Formik>
    </section>
  );
}
