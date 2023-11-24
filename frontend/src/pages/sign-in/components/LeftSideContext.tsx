import { Button, Divider, Typography } from "../../../design-system";
import LoginForm from "./SignInForm";
import GoogleIcon from "../../../assets/login/google_icon.svg";
import AppleIcon from "../../../assets/login/apple_icon.svg";
import { Link } from "react-router-dom";
import { RouteNames } from "../../../routers/interface";

function LeftSideContext() {
  return (
    <div className="bg-color-gray py-12 px-4 lg:px-6 xl:px-12">
      <div
        className="2xl:max-w-[1200px] text-2xl font-bold text-white bg-black py-3 px-[14px] w-[95px] h-[53px]
            flex items-center justify-center rounded-[8px] mb-16"
      >
        LOGO
      </div>
      <section className="grid gap-6 px-4 md:px-16 xl:max-w-[1000px] xl:mx-auto">
        <div className="flex flex-col gap-3">
          <Typography className="!text-[28px] !font-semibold text-center">
            Sign into your account
          </Typography>
          <Typography color="gray.300" className="text-center !text-sm">
            Manage your online payment transaction better.
          </Typography>
        </div>
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
          <Divider />
          <Typography color="gray.300" className="!w-full text-center !text-sm">
            or continue with
          </Typography>
          <Divider />
        </div>
        <LoginForm />
        <div className="text-center mt-5 mb-[124px] max-md:mb-10">
          <Typography variant={"body3"}>
            Don’t have an account?{" "}
            <Typography
              variant={"body3"}
              component={Link}
              className={"underline"}
              to={RouteNames.SIGN_UP}
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
      </section>
    </div>
  );
}

export default LeftSideContext;
