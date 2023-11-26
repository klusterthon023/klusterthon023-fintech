import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import { useMutation } from "react-query";
import { Button, Input, Modal, Typography } from "../../../design-system";
import { createInvoice } from "../pages/Dashboard/api-dashboard";
import { formikHelper } from "../../../utils/helper";
import { toast } from "react-toastify";
import { Product } from "../pages/Dashboard/types";
import { useState } from "react";
import { useAppContext } from "../../../contexts";

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

  const { toggleIsCreateInvoicedModalOpen, isCreateInvoiceModalOpen } =
    useAppContext();

  const [showMore, setShowMore] = useState(false);

  const { mutateAsync, isLoading, isError, error } = useMutation(createInvoice);

  const handleSubmit = async (values: FormValues) => {
    try {
      const result = await mutateAsync(values);
      toast(result?.message);
      toggleIsCreateInvoicedModalOpen();
    } catch (error) {
      console.error(error);
    }
  };

  const axiosError = error as AxiosError;

  return (
    <Modal
      title={"New Invoice"}
      description={"Enter client information"}
      isModalOpen={isCreateInvoiceModalOpen}
      onClose={() => {
        toggleIsCreateInvoicedModalOpen();
      }}
    >
      {isCreateInvoiceModalOpen && (
        <section className="sm:!w-auto md:!w-[500px] mt-5">
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
              const { getFieldProps, dirty, isValid } = formik;

              return (
                <Form className="grid gap-5 placeholder:text-gray-100">
                  <Input
                    placeholder="Customer ID"
                    {...getFieldProps("customer_id")}
                    {...formikHelper(formik, "customer_id")}
                    className=" placeholder:text-sm"
                  />

                  {!showMore && (
                    <div className="flex justify-start">
                      <Typography
                        onClick={() => setShowMore(true)}
                        variant="body4"
                        className="!cursor-pointer"
                        color="primary.300"
                      >
                        Add manually
                      </Typography>
                    </div>
                  )}

                  {showMore && (
                    <>
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
                    </>
                  )}
                  <Button
                    type="submit"
                    disabled={!dirty || !isValid}
                    loading={isLoading}
                    fullWidth
                  >
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
