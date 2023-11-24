import { Formik, Field, ErrorMessage, FormikHelpers, Form } from "formik";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Button, Typography } from "../../../design-system";
//import { ISignUpPayload } from '../types';
import { signupUser } from "../api-for-sign-up";
import { useMutation } from "react-query";
import { RouteNames } from "../../../routers/interface";

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
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    try {
      const result = await mutateAsync(values);
      toast(result?.message);
      setTimeout(() => {
        navigate(RouteNames.SIGN_IN);
      }, 5000);
    } catch (error) {
      toast("Email already exists, please use another one.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pb-6">
      <>
        {isError && error && (
          <div className="p-2 mb-5 flex justify-center items-center bg-color-red rounded-lg">
            <Typography variant="body3" color="white">
              {(error as any)?.response.data.message}
            </Typography>
          </div>
        )}
      </>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid, values, touched, errors }) => (
          <Form className="grid gap-5 placeholder:text-gray-100">
            <label className="flex flex-col">
              <Field
                type="text"
                name="owner_name"
                placeholder="Full Name"
                className="placeholder"
                style={{
                  padding: "10px",
                  borderRadius: "5px",
                  border:
                    touched.owner_name && errors.owner_name
                      ? "1px solid red"
                      : "1px solid rgba(128, 128, 128, 0.3)",
                }}
              />
              <ErrorMessage
                name="owner_name"
                component="div"
                className="error"
              />
            </label>

            <label className="flex flex-col">
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="placeholder"
                style={{
                  padding: "10px",
                  borderRadius: "5px",
                  border:
                    touched.email && errors.email
                      ? "1px solid red"
                      : "1px solid rgba(128, 128, 128, 0.3)",
                }}
              />
              <ErrorMessage name="email" component="div" className="error" />
            </label>

            <label className="flex flex-col">
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className="placeholder"
                style={{
                  padding: "10px",
                  borderRadius: "5px",
                  border:
                    touched.password && errors.password
                      ? "1px solid red"
                      : "1px solid rgba(128, 128, 128, 0.3)",
                }}
              />
              <ErrorMessage name="password" component="div" className="error" />
            </label>

            <label className="flex flex-col">
              <Field
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="placeholder"
                style={{
                  padding: "10px",
                  borderRadius: "5px",
                  border:
                    touched.confirmPassword && errors.confirmPassword
                      ? "1px solid red"
                      : "1px solid rgba(128, 128, 128, 0.3)",
                }}
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="error"
              />
            </label>

            <label className="flex flex-col items-start">
              <div className="flex items-center gap-2">
                <Field
                  type="checkbox"
                  name="acceptTerms"
                  style={{
                    padding: "10px",
                    borderRadius: "5px",
                    border:
                      touched.acceptTerms && errors.acceptTerms
                        ? "1px solid red"
                        : "1px solid rgba(128, 128, 128, 0.3)",
                  }}
                />
                <span>I agree to the term and conditions.</span>
              </div>
              <ErrorMessage
                name="acceptTerms"
                component="div"
                className="error block"
              />
            </label>
            <Button
              type="submit"
              loading={isLoading}
              disabled={!(isValid && values.acceptTerms)}
              fullWidth
            >
              Sign Up
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
