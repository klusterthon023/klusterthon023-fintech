import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Input, Button, Modal, Typography } from "../../../design-system";
import { formikHelper } from "../../../utils/helper";
import { useAppContext } from "../../../contexts";
import { useState } from "react";
import DialPad from "./DialPad";

enum ResetPasswordFlowEnum {
  FORGET_PASSWORD = "forget-password",
  VERIFY_PASSWORD = "verify-password",
  RESET_PASSWORD = "reset-password",
  SUCCESS = "success",
}

const ResetPasswordFlowModal = () => {
  const { toggleIsForgetPasswordModalOpen, isForgetPasswordModalOpen } =
    useAppContext();

  const [resetPasswordFlow, setResetPasswordFlow] =
    useState<ResetPasswordFlowEnum>(ResetPasswordFlowEnum.FORGET_PASSWORD);

  const handleSubmit = async () => {
    try {
      // const result = await mutateAsync(value);
      // console.log(result)
      // setDataToLocalStorage("accessToken", result?.token);
      // navigate(RouteNames.HOME);
      setResetPasswordFlow(ResetPasswordFlowEnum.VERIFY_PASSWORD);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmitVerifyToken = async () => {
    try {
      // const result = await mutateAsync(value);
      // console.log(result)
      // setDataToLocalStorage("accessToken", result?.token);
      // navigate(RouteNames.HOME);
      setResetPasswordFlow(ResetPasswordFlowEnum.RESET_PASSWORD);
    } catch (error) {
      console.error(error);
    }
  };
  const handleSubmitResetPassword = async () => {
    try {
      // const result = await mutateAsync(value);
      // console.log(result)
      // setDataToLocalStorage("accessToken", result?.token);
      // navigate(RouteNames.HOME);
      setResetPasswordFlow(ResetPasswordFlowEnum.SUCCESS);
    } catch (error) {
      console.error(error);
    }
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid Email")
      .required("This Field is required"),
  });

  const validationSchemaVerifyToken = Yup.object().shape({
    token: Yup.string().required("This Field is required"),
  });

  const validationSchemaForResetPassword = Yup.object().shape({
    password: Yup.string().required("This Field is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Password must match")
      .required("This Field is required"),
  });

  const getTitleAndDescription = () => {
    switch (resetPasswordFlow) {
      case ResetPasswordFlowEnum.FORGET_PASSWORD:
        return {
          title: "Reset your password",
          description:
            "Enter the email address associated your account so we can send a link to reset your password",
        };
      case ResetPasswordFlowEnum.VERIFY_PASSWORD:
        return {
          title: "Enter verification code",
          description:
            "We have just sent a verification code to example@email.com",
        };
      case ResetPasswordFlowEnum.RESET_PASSWORD:
        return {
          title: "Create new password",
          description:
            "Please enter a new password. Make sure your new password is strong and different from the previous password",
        };
      case ResetPasswordFlowEnum.SUCCESS:
        return {
          title: "",
          description: "",
        };
      default:
        return {
          title: "Reset your password",
          description:
            "Enter the email address associated your account so we can send a link to reset your password",
        };
    }
  };

  const { title, description } = getTitleAndDescription();

  return (
    <>
      <Modal
        title={title}
        showCloseButton={!!title}
        description={description}
        isModalOpen={isForgetPasswordModalOpen}
        onClose={() => {
          toggleIsForgetPasswordModalOpen();
          setResetPasswordFlow(ResetPasswordFlowEnum.FORGET_PASSWORD);
        }}
      >
        {resetPasswordFlow === ResetPasswordFlowEnum.FORGET_PASSWORD && (
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
                      variant="body5"
                      className="!underline"
                      color="primary.300"
                    >
                      Return to login
                    </Typography>
                  </div>
                  <Button type="submit" fullWidth disabled={!isValid || !dirty}>
                    Continue
                  </Button>
                </Form>
              );
            }}
          </Formik>
        )}

        {resetPasswordFlow === ResetPasswordFlowEnum.VERIFY_PASSWORD && (
          <>
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

                    <div className="flex justify-center">
                      <Typography
                        onClick={toggleIsForgetPasswordModalOpen}
                        variant="body5"
                        className="!underline"
                        color="primary.300"
                      >
                        Send the code again
                      </Typography>
                    </div>

                    <Button
                      fullWidth
                      disabled={values?.token.length !== 6}
                      //   loading={isLoading || isLoadingForRegisterToken}
                      type="submit"
                    >
                      Verify
                    </Button>
                  </Form>
                );
              }}
            </Formik>
          </>
        )}

        {resetPasswordFlow === ResetPasswordFlowEnum.RESET_PASSWORD && (
          <>
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
                      //   loading={isLoading || isLoadingForRegisterToken}
                      type="submit"
                    >
                      Reset Password
                    </Button>
                  </Form>
                );
              }}
            </Formik>
          </>
        )}

        {resetPasswordFlow === ResetPasswordFlowEnum.SUCCESS && (
          <div className="flex flex-col items-center space-y-9">
            <Typography variant="h5">
              You successfully changed your password
            </Typography>

            <Typography
              className="!text-center"
              variant="body3"
              color="gray.200"
            >
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo con
            </Typography>

            <Button
              onClick={() => {
                toggleIsForgetPasswordModalOpen();
                setResetPasswordFlow(ResetPasswordFlowEnum.FORGET_PASSWORD);
              }}
              fullWidth
            >
              Back to Login
            </Button>
          </div>
        )}
      </Modal>
    </>
  );
};

export default ResetPasswordFlowModal;
