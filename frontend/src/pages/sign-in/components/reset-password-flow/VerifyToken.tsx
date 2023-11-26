import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Button, Typography } from "../../../../design-system";
import DialPad from "../DialPad";
import { useMutation } from "react-query";
import { resendToken, verifyToken } from "../../api-for-sign-in";
import { IVerifyTokenPayload } from "../../types";
import { toast } from "react-toastify";
import Loader from "../../../../components/loader/ApiLoadingState";
import { removeDataFromLocalStorage } from "../../../../utils/helper";

function VerifyToken({ handleNext }: { handleNext: () => void }) {
  const { mutateAsync, isLoading, error, isError } = useMutation(verifyToken);

  const validationSchemaVerifyToken = Yup.object().shape({
    token: Yup.string().required("This Field is required"),
  });

  const handleSubmitVerifyToken = async (value: IVerifyTokenPayload) => {
    try {
      await mutateAsync(value);
      handleNext();
      removeDataFromLocalStorage("verification_email");
    } catch (error) {
      console.error(error);
    }
  };

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
      {isLoading && <Loader />}
      <Formik
        initialValues={{ token: "" }}
        validationSchema={validationSchemaVerifyToken}
        onSubmit={handleSubmitVerifyToken}
      >
        {(formik) => {
          const { values, handleChange, handleBlur } = formik;
          return (
            <Form className="space-y-9">
              <DialPad
                onBlur={handleBlur}
                onChange={handleChange}
                value={values?.token}
              />
              <ResendToken />
              <Button
                fullWidth
                disabled={values?.token.length !== 6}
                loading={isLoading}
                type="submit"
              >
                Verify
              </Button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}

export default VerifyToken;

const ResendToken = () => {
  const { mutateAsync, isLoading } = useMutation(resendToken);

  const handleSubmitResendToken = async () => {
    try {
      await mutateAsync();
      toast.success("Token resend successfully");
    } catch (error) {
      console.error(error);
      toast.error("An Error occurred");
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      <div className="flex justify-center ">
        <Typography
          onClick={handleSubmitResendToken}
          variant="body4"
          className="!underline !cursor-pointer"
          color="primary.300"
        >
          Send the code again
        </Typography>
      </div>
    </>
  );
};
