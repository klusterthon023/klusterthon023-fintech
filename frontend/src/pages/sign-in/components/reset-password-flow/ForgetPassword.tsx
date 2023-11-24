import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Input, Button, Typography } from "../../../../design-system";
import { formikHelper, setDataToLocalStorage } from "../../../../utils/helper";
import { useAppContext } from "../../../../contexts";
import { IForgetPasswordPayload } from "../../types";
import { useMutation } from "react-query";
import { forgetPassword } from "../../api-for-sign-in";

function ForgetPassword({ handleNext }: { handleNext: () => void }) {
  const { toggleIsForgetPasswordModalOpen } = useAppContext();

  const { mutateAsync, isLoading, error, isError } =
    useMutation(forgetPassword);

  const handleSubmit = async (value: IForgetPasswordPayload) => {
    try {
      setDataToLocalStorage("verification_email", value.email);
      await mutateAsync(value);
      handleNext();
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
    <>
      <>
        {error && isError && (
          <div className="p-2 mb-5 flex justify-center items-center bg-color-red rounded-lg">
            <Typography variant="body3" color="white">
              {(error as any)?.response?.data?.message}
            </Typography>
          </div>
        )}
      </>
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
                type={"email"}
                placeholder="Email"
                {...getFieldProps("email")}
                {...formikHelper(formik, "email")}
                className=" placeholder:text-sm"
              />
              <div className="flex justify-start">
                <Typography
                  onClick={toggleIsForgetPasswordModalOpen}
                  variant="body4"
                  className="!underline"
                  color="primary.300"
                >
                  Return to login
                </Typography>
              </div>
              <Button
                type="submit"
                loading={isLoading}
                fullWidth
                disabled={!isValid || !dirty}
              >
                Continue
              </Button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}

export default ForgetPassword;
