import { Typography } from "../../../design-system";
import LoginForm from "./LoginForm";

function LeftSideContext() {
  return (
    <div className="p-16 max-md:p-8  max-sm:p-4 bg-color-gray w-full min-h-screen overflow-y-scroll">
      <div className="bg-black p-3 h-12 w-[90px] flex justify-center items-center text-white rounded-lg mb-12">
        LOGO
      </div>
      <div className="px-12 max-md:p-3 text-center ">
        <Typography className="!mb-3" variant="h5" fontWeight={600}>
          Sign into your account
        </Typography>
        <div className="mb-6">
          <Typography variant="body4" color="gray.300">
            Manage your online payment transaction better.
          </Typography>
        </div>

        <LoginForm />
      </div>
    </div>
  );
}

export default LeftSideContext;
