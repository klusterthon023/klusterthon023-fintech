import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Input, Button, Typography } from "../../../../design-system";
import { formikHelper } from "../../../../utils/helper";
import { IResetPasswordPayload } from "../../types";
import { useMutation } from "react-query";
import { resetPassword } from "../../api-for-sign-in";

function ResetPassword({ handleNext }: { handleNext: () => void }) {
  const { mutateAsync, isLoading, error, isError } = useMutation(resetPassword);
  const handleSubmitResetPassword = async (
    value: IResetPasswordPayload & { confirmPassword: string }
  ) => {
    try {
      await mutateAsync({ password: value?.password });
      handleNext();
    } catch (error) {
      console.error(error);
    }
  };

  const validationSchemaForResetPassword = Yup.object().shape({
    password: Yup.string().required("This Field is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Password must match")
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
        initialValues={{ password: "", confirmPassword: "" }}
        validationSchema={validationSchemaForResetPassword}
        onSubmit={handleSubmitResetPassword}
      >
        {(formik) => {
          const { getFieldProps, isValid, dirty } = formik;
          return (
            <Form className="space-y-9">
              <Input
                type={"password"}
                placeholder="Password"
                {...getFieldProps("password")}
                {...formikHelper(formik, "password")}
                className=" placeholder:text-sm"
              />
              <Input
                type={"password"}
                placeholder="Confirm Password"
                {...getFieldProps("confirmPassword")}
                {...formikHelper(formik, "confirmPassword")}
                className=" placeholder:text-sm"
              />

              <Button
                fullWidth
                disabled={!isValid || !dirty}
                loading={isLoading}
                type="submit"
              >
                Reset Password
              </Button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}

export default ResetPassword;
