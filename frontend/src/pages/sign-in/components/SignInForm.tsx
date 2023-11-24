import { useMutation } from "react-query";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Input, Button, Checkbox, Typography } from "../../../design-system";
import { formikHelper, setDataToLocalStorage } from "../../../utils/helper";
import { loginUser } from "../api-for-sign-in";
import { ISignInPayload } from "../types";
import { useNavigate } from "react-router-dom";
import { RouteNames } from "../../../routers/interface";

function SignInForm() {
  const initialValues = {
    email: "",
    password: "",
  };

  const navigate = useNavigate();

  const { mutateAsync, isLoading } = useMutation(loginUser);

  const handleSubmit = async (value: ISignInPayload) => {
    try {
      const result = await mutateAsync(value);
      setDataToLocalStorage("accessToken", result?.token);
      navigate(RouteNames.HOME);
    } catch (error) {
      console.error(error);
    }
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid Email")
      .required("This Field is required"),
    password: Yup.string().required("This Field is required"),
  });

  return (
    <div className="grid gap-5">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => {
          const { getFieldProps, isValid, dirty } = formik;
          return (
            <Form className="grid gap-5 placeholder:text-gray-100">
              <Input
                type={"email"}
                placeholder="Username or email"
                {...getFieldProps("email")}
                {...formikHelper(formik, "email")}
                className=" placeholder:text-sm"
              />

              <Input
                type="password"
                placeholder="Password"
                {...getFieldProps("password")}
                {...formikHelper(formik, "password")}
              />

              <div className="flex max-md:flex-col max-md:gap-3 justify-between items-center">
                <Checkbox label="Remember me" />
                <Typography variant="body4" color="primary.300">
                  Forgot your password?
                </Typography>
              </div>

              <Button
                type="submit"
                color="primary"
                fullWidth
                disabled={!isValid || !dirty}
                loading={isLoading}
              >
                Sign In
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default SignInForm;
