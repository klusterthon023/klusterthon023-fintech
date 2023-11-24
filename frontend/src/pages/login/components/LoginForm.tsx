import { useMutation } from "react-query";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import {
  Input,
  Button,
  Checkbox,
  Typography,
  Divider,
} from "../../../design-system";
import { formikHelper, setDataToLocalStorage } from "../../../utils/helper";
import { loginUser } from "../api-login";
import { ILoginPayload } from "../types";
import { Link, useNavigate } from "react-router-dom";
import { RouteNames } from "../../../routers/interface";
import GoogleIcon from "../../../assets/login/google_icon.svg";
import AppleIcon from "../../../assets/login/apple_icon.svg";

function LoginForm() {
  const initialValues = {
    email: "",
    password: "",
  };

  const navigate = useNavigate();

  const { mutateAsync, isLoading } = useMutation(loginUser);

  const handleSubmit = async (value: ILoginPayload) => {
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
      <div className="flex flex-col lg:flex-row xl:flex-row gap-6 justify-between ">
        <Button
          disabled
          className="!bg-white !border !w-full !border-gray-100 !text-black"
          variant="outlined"
          startIcon={<img src={GoogleIcon} className="h-6 w-6" />}
        >
          Sign in with Google
        </Button>
        <Button
          disabled
          className="!bg-white !border !w-full !border-gray-100 !text-black"
          variant="outlined"
          startIcon={<img src={AppleIcon} className="h-6 w-6" />}
        >
          Sign in with Apple
        </Button>
      </div>
      <div className="flex items-center">
          <Divider/>
          <Typography color="gray.300" className="!w-full text-center !text-sm">or continue with</Typography>
          <Divider/>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => {
          const { getFieldProps, isValid } = formik;
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
                disabled={!isValid}
                loading={isLoading}
              >
                Sign In
              </Button>
            </Form>
          );
        }}
      </Formik>
      <div className="text-center mt-5 mb-[124px]">
        <Typography variant={"body3"}>
          Don’t have an account?{" "}
          <Typography
            variant={"body3"}
            component={Link}
            className={"underline"}
            to={RouteNames.REGISTER}
            color={"primary.300"}
          >
            Sign up
          </Typography>
        </Typography>
      </div>
      <div className="flex gap-6 items-center justify-center">
        <Typography variant="body4" color="primary.300">
          Terms & conditions
        </Typography>
        <Typography variant="body4" color="primary.300">
          Privacy Policy
        </Typography>
        <Typography variant="body4" color="primary.300">
          Help
        </Typography>
      </div>

      <div className="mt-6 text-center">
        <Typography color="gray.100" variant="body4">
          &copy; {new Date().getFullYear()} All right reserved.
        </Typography>
      </div>
    </div>
  );
}

export default LoginForm;
