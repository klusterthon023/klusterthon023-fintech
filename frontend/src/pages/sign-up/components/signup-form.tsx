import { Button, Divider, Typography } from "../../../design-system";
import RegisterForm from "./form";
import FaApple from "../../../assets/auth/FaApple.svg";
import FaGoogle from "../../../assets/auth/FaGoogle.svg";
import { Link } from "react-router-dom";
import { RouteNames } from "../../../routers/interface";

export default function SignUpForm() {
  return (
    <div className="bg-color-gray py-12 px-4 lg:px-6 xl:px-12 min-h-screen">
      <div
        className="2xl:max-w-[1200px] text-2xl font-bold text-white bg-black py-3 px-[14px] w-[95px] h-[53px]
            flex items-center justify-center rounded-[8px] mb-16"
      >
        LOGO
      </div>
      <section className="grid gap-6 px-4 md:px-16 xl:max-w-[1000px] xl:mx-auto">
        <div className="flex flex-col gap-3">
          <Typography className="!text-[28px] !font-semibold text-center">
            Sign up for an account
          </Typography>
          <Typography color="gray.300" className="text-center !text-sm">
            Manage your online payment transaction better.
          </Typography>
        </div>
        <div className="flex flex-col lg:flex-row xl:flex-row gap-6 justify-between">
          <Button
            disabled
            className="!bg-white !border-[1px] !w-full !border-gray-100 border-opacity-90 !text-black"
            variant="outlined"
            startIcon={<img src={FaGoogle} className="h-6 w-6" />}
          >
            Sign in with Google
          </Button>
          <Button
            disabled
            className="!bg-white !border-[1px] !w-full !border-gray-100 border-opacity-90 !text-black"
            variant="outlined"
            startIcon={<img src={FaApple} className="h-6 w-6" />}
          >
            Sign in with Apple
          </Button>
        </div>
        <div className="flex items-center">
          <Divider />
          <Typography color="gray.300" className="!w-full text-center !text-sm">
            or continue with
          </Typography>
          <Divider />
        </div>
        <RegisterForm />
        <div className=" mx-auto">
          <Link to={RouteNames.SIGN_IN}>
            Already have an account?{" "}
            <Typography color="primary" className="underline !inline-block">
              Sign in
            </Typography>
          </Link>
        </div>
      </section>
    </div>
  );
}
