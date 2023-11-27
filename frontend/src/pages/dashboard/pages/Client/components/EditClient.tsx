import {
  Button,
  Input,
  Modal,
  Select,
  Typography,
} from "../../../../../design-system";
import { useMutation } from "react-query";
import { editClient } from "../client-api";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useState } from "react";
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
  phone_number: Yup.string().required("A phone number is required"),
  business_address: Yup.string().required("A location is required"),
});

export default function EditClient({
  isEditModalOpen,
  onClose,
  id,
  refetchData,
  client,
}: any) {
  const [type, setType] = useState("");

  const initialValues: FormValues = {
    name: client?.name,
    email: client?.email,
    customer_type: "",
    phone_number: client?.phone_number,
    business_address: client?.business_address,
  };

  const { mutateAsync, isLoading, isError, error } = useMutation(editClient);

  const handleSubmit = async (values: FormValues) => {
    try {
      const result = await mutateAsync({
        id: id,
        data: {
          ...values,
          customer_type: type,
        },
      });
      toast((result as any)?.message);
      refetchData();
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  const axiosError = error as AxiosError;

  return (
    <Modal
      title={"Edit Client Information"}
      isModalOpen={isEditModalOpen}
      onClose={onClose}
    >
      {isEditModalOpen && (
        <section className="sm:!w-auto md:!w-[500px] mt-4">
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
              const { getFieldProps, dirty } = formik;

              return (
                <Form className="grid gap-5 placeholder:text-gray-100">
                  <Input
                    label="Name"
                    placeholder="Enter name"
                    {...getFieldProps("name")}
                    {...formikHelper(formik, "name")}
                    className=" placeholder:text-sm"
                  />

                  <Input
                    label="Email address"
                    type="email"
                    placeholder="Enter email address"
                    {...getFieldProps("email")}
                    {...formikHelper(formik, "email")}
                    className=" placeholder:text-sm"
                  />

                  <Select
                    defaultValue={{
                      label: client?.customer_type,
                      value: client?.customer_type,
                    }}
                    onChange={(e: any) => {
                      setType(e.value);
                    }}
                    className=" placeholder:text-sm"
                    label="Type"
                    placeholder="Select category"
                    options={[
                      { label: "Business", value: "Business" },
                      { label: "Individual", value: "Individual" },
                    ]}
                  />
                  <Input
                    label="Mobile number"
                    type="text"
                    placeholder="Enter phone number"
                    {...getFieldProps("phone_number")}
                    {...formikHelper(formik, "phone_number")}
                    className=" placeholder:text-sm"
                  />

                  <Input
                    label="Location"
                    type="text"
                    placeholder="Enter location"
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
      )}
    </Modal>
  );
}
