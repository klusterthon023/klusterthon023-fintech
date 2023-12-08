import { Formik, Form, FieldArray, Field } from "formik";
import * as Yup from "yup";
import { useMutation, useQuery } from "react-query";
import {
  Button,
  Input,
  Modal,
  Select,
  Typography,
} from "../../../design-system";
import { createInvoice } from "../pages/Dashboard/api-dashboard";
import { formikHelper } from "../../../utils/helper";
import { toast } from "react-toastify";
import { Product } from "../pages/Dashboard/types";
import { useAppContext } from "../../../contexts";
import { getAllClient } from "../pages/Client/client-api";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface FormValues {
  customer_id: string;
  transcation_details: string;
  products: Product[];
  due_date: Date;
}

interface AxiosError {
  response?: {
    data?: {
      message?: string;
    };
  };
}

const validationSchema = Yup.object().shape({
  // customer_id: Yup.string().required("Customer is required"),
  transcation_details: Yup.string().required(
    "Transaction details are required"
  ),
});

export default function CreateInvoice() {
  const initialValues: FormValues = {
    customer_id: "",
    transcation_details: "",
    products: [{ description: "", quantity: 1, unit_price: 0 }],
    due_date: new Date(),
  };
  const { data } = useQuery(["GetAllCustomer"], getAllClient);

  const options = data?.data?.map((option) => ({
    label: option.name,
    value: option._id,
  }));

  const {
    toggleIsCreateInvoicedModalOpen,
    refetchInvoice,
    isCreateInvoiceModalOpen,
    clientDetailsForNewTransaction,
  } = useAppContext();

  const { mutateAsync, isLoading, isError, error } = useMutation(createInvoice);

  const handleSubmit = async (values: FormValues) => {
    try {
      const result = await mutateAsync({
        ...values,
        customer_id: clientDetailsForNewTransaction._id || values.customer_id,
        due_date: values.due_date.toString(),
      });
      refetchInvoice();
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
      showScrollBar
      description={"Enter client information"}
      isModalOpen={isCreateInvoiceModalOpen}
      onClose={() => {
        toggleIsCreateInvoicedModalOpen();
      }}
    >
      {isCreateInvoiceModalOpen && (
        <div className="sm:!w-auto md:!w-[500px] !rounded-lg mt-5">
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
                  <>
                    {!options?.length && (
                      <div className="p-2 mb-3 flex justify-center items-center bg-color-tertiary rounded-lg">
                        <Typography variant="body3" color="white">
                          Add client before you can create invoice
                        </Typography>
                      </div>
                    )}
                  </>

                  <Select
                    defaultValue={{
                      label: clientDetailsForNewTransaction.name,
                      value: clientDetailsForNewTransaction._id,
                    }}
                    value={options?.find(
                      (option) => option.value === formik.values.customer_id
                    )}
                    disabled={
                      !!clientDetailsForNewTransaction.name || !options?.length
                    }
                    onChange={(option) => {
                      // @ts-ignore
                      formik.setFieldValue("customer_id", option.value);
                    }}
                    className="placeholder:text-sm"
                    label="Customer Name"
                    placeholder="Select a customer"
                    options={options}
                  />

                  <Input
                    type="text"
                    label="Transcation Details"
                    placeholder="Transaction details"
                    {...getFieldProps("transcation_details")}
                    {...formikHelper(formik, "transcation_details")}
                    className=" placeholder:text-sm"
                  />
                  <FieldArray name="products">
                    {({ push, remove }) => (
                      <div>
                        {formik.values.products.map((_, index) => (
                          <div className="space-y-4 pb-4" key={index}>
                            <Input
                              label={`${"Product name"}`}
                              {...getFieldProps(
                                `products.${index}.product_name`
                              )}
                            />
                            <Input
                              label={`Product Quantity`}
                              type="number"
                              {...getFieldProps(`products.${index}.quantity`)}
                            />
                            <Input
                              label={`Product Price`}
                              type="number"
                              {...getFieldProps(`products.${index}.unit_price`)}
                            />
                            {index > 0 && (
                              <button
                                type="button"
                                onClick={() => remove(index)}
                              >
                                Remove Product
                              </button>
                            )}
                          </div>
                        ))}
                        <button
                          type="button"
                          className="pt-4 underline"
                          onClick={() =>
                            push({
                              product_name: "",
                              quantity: 1,
                              unit_price: 0,
                            })
                          }
                        >
                          <Typography variant="body4">
                            Add More Products
                          </Typography>
                        </button>
                      </div>
                    )}
                  </FieldArray>
                  <label
                    htmlFor="due_date"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Due Date
                  </label>
                  <Field name="due_date">
                    {({ field, form }: { field: any; form: any }) => (
                      <DatePicker
                        className="w-full py-4 h-12 border border-gray-100 text-center rounded-lg cursor-pointer outline-none"
                        selected={field.value}
                        onChange={(date: Date) =>
                          form.setFieldValue(field.name, date)
                        }
                        dateFormat="MM/dd/yyyy"
                      />
                    )}
                  </Field>

                  <Button type="submit" loading={isLoading} fullWidth>
                    Send
                  </Button>
                </Form>
              );
            }}
          </Formik>
        </div>
      )}
    </Modal>
  );
}
