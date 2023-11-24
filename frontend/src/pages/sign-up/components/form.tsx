import { Formik, Form } from "formik";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Button, Checkbox, Input, Typography } from "../../../design-system";
import { ISignUpPayload } from "../types";
import { signupUser } from "../api-for-sign-up";
import { useMutation } from "react-query";
import { RouteNames } from "../../../routers/interface";
import { formikHelper } from "../../../utils/helper";

interface FormValues {
  owner_name: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}

const validationSchema = Yup.object().shape({
  owner_name: Yup.string().required("Full Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
  acceptTerms: Yup.bool().oneOf(
    [true],
    "You must accept the terms and conditions"
  ),
});

const RegisterForm: React.FC = () => {
  const initialValues: FormValues = {
    owner_name: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  };
  const { mutateAsync, isLoading, error, isError } = useMutation(signupUser);

  const navigate = useNavigate();
  const handleSubmit = async (
    values: ISignUpPayload & { confirmPassword: string; acceptTerms: boolean }
  ) => {
    try {
      const { confirmPassword, acceptTerms, ...others } = values;
      const result = await mutateAsync(others);
      toast(result?.message);
      navigate(RouteNames.SIGN_IN);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="pb-6">
      <>
        {isError && error && (
          <div className="p-2 mb-5 flex justify-center items-center bg-color-red rounded-lg">
            <Typography variant="body3" color="white">
              {(error as any)?.response?.data?.message}
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
          const { values, dirty, getFieldProps } = formik;

          return (
            <Form className="grid gap-5 placeholder:text-gray-100">
              <Input
                placeholder="Full Name"
                {...getFieldProps("owner_name")}
                {...formikHelper(formik, "owner_name")}
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
                type="password"
                placeholder="Password"
                {...getFieldProps("password")}
                {...formikHelper(formik, "password")}
                className=" placeholder:text-sm"
              />
              <Input
                type="password"
                placeholder="Confirm Password"
                {...getFieldProps("confirmPassword")}
                {...formikHelper(formik, "confirmPassword")}
                className=" placeholder:text-sm"
              />

              <Checkbox
                checked={values.acceptTerms}
                {...getFieldProps("acceptTerms")}
                label="I agree to the term and conditions."
              />

              <Button
                type="submit"
                loading={isLoading}
                disabled={!(dirty && values.acceptTerms)}
                fullWidth
              >
                Sign Up
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default RegisterForm;
