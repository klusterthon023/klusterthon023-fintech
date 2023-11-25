import {
  Button,
  Checkbox,
  Input,
  Modal,
  Select,
  Typography,
} from "../../../../../design-system";
import { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { Form } from "react-router-dom";
import { formikHelper } from "../../../../../utils/helper";
import { useAppContext } from "../../../../../contexts";

function CreateInvoiceModal() {
  const { toggleIsCreateInvoicedModalOpen, isCreateInvoiceModalOpen } =
    useAppContext();
  const [showMore, setShowMore] = useState(false);

  const handleSubmit = async (_: any) => {
    try {
    } catch (error) {
      console.error(error);
    }
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid Email")
      .required("This Field is required"),
  });

  return (
    <Modal
      title={"New Invoice"}
      description={"Select the client you wish to send invoice to"}
      isModalOpen={isCreateInvoiceModalOpen}
      onClose={() => {
        toggleIsCreateInvoicedModalOpen();
      }}
    >
      {isCreateInvoiceModalOpen && (
        <div className="!w-full">
          <Formik
            initialValues={{
              email: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {(formik) => {
              const { getFieldProps, isValid, dirty } = formik;
              return (
                <Form className="grid gap-5 placeholder:text-gray-100">
                  <Input
                    label="Client Name"
                    placeholder="Enter client name"
                    {...getFieldProps("email")}
                    {...formikHelper(formik, "email")}
                    className=" placeholder:text-sm"
                  />
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

                  {showMore && (
                    <>
                      <Input
                        label="Email address"
                        type={"email"}
                        placeholder="Enter email address"
                        {...getFieldProps("email")}
                        {...formikHelper(formik, "email")}
                        className=" placeholder:text-sm"
                      />
                      <Select
                        label="Type"
                        placeholder="Select category"
                        options={[]}
                      />
                      <Input
                        label="Location"
                        type={"email"}
                        placeholder="Enter location"
                        {...getFieldProps("email")}
                        {...formikHelper(formik, "email")}
                        className=" placeholder:text-sm"
                      />
                    </>
                  )}
                  <Checkbox label="Save this client’s information" />

                  <Button
                    type="submit"
                    // loading={isLoading}
                    fullWidth
                    disabled={!isValid || !dirty}
                  >
                    Continue
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

export default CreateInvoiceModal;
