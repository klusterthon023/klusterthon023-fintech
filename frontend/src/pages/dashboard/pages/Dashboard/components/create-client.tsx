import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import { useMutation } from "react-query";
import { Button, Input, Typography } from "../../../../../design-system";
import { createClient } from "../api-dashboard";
import { formikHelper } from "../../../../../utils/helper";
import { toast } from "react-toastify";

interface FormValues {
  name: string;
  email: string;
  customer_type: string;
  phone_number: string;
  business_address: string;
}

interface AxiosError {
  response?: {
    data?: {
      message?: string;
    };
  };
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  customer_type: Yup.string().required("Business type is required"),
  phone_number: Yup.string().required("A phone number is required"),
  business_address: Yup.string().required("A location is required"),
});

export default function CreateClient() {
  const initialValues: FormValues = {
    name: "",
    email: "",
    customer_type: "",
    phone_number: "",
    business_address: "",
  };

  const { mutateAsync, isLoading, isError, error } = useMutation(createClient);

  const handleSubmit = async (
    values: FormValues,
    FormikHelpers: FormikHelpers<FormValues>
  ) => {
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
    <section className="sm:!w-auto md:!w-[500px]">
      <Typography className="!text-3xl !font-semibold">New Client</Typography>
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
                placeholder="text"
                {...getFieldProps("name")}
                {...formikHelper(formik, "name")}
                className=" placeholder:text-sm"
              />

              <Input
                type="email"
                placeholder="Email"
                {...getFieldProps("email")}
                {...formikHelper(formik, "email")}
                className=" placeholder:text-sm"
              />

              <Input
                type="text"
                placeholder="type"
                {...getFieldProps("customer_type")}
                {...formikHelper(formik, "customer_type")}
                className=" placeholder:text-sm"
              />
              <Input
                type="text"
                placeholder="Phone Number"
                {...getFieldProps("phone_number")}
                {...formikHelper(formik, "phone_number")}
                className=" placeholder:text-sm"
              />

              <Input
                type="text"
                placeholder="Location"
                {...getFieldProps("business_address")}
                {...formikHelper(formik, "business_address")}
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
