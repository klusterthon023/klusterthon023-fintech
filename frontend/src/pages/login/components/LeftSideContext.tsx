import { Typography } from "../../../design-system";
import LoginForm from "./LoginForm";

function LeftSideContext() {
  return (
    <div className="bg-color-gray py-12 px-4 lg:px-6 xl:px-12">
      <div className="2xl:max-w-[1200px] text-2xl font-bold text-white bg-black py-3 px-[14px] w-[95px] h-[53px]
            flex items-center justify-center rounded-[8px] mb-16">
                LOGO
      </div>
      <section className="grid gap-6 px-4 md:px-16 xl:max-w-[1000px] xl:mx-auto">
        <div className="flex flex-col gap-3">
          <Typography className="!text-[28px] !font-semibold text-center">Sign up for an account</Typography>
          <Typography color="gray.300" className="text-center !text-sm">Manage your online payment transaction better.</Typography>
        </div>
        <LoginForm />
      </section>
    </div>
  );
}

export default LeftSideContext;
