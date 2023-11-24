import LoginIllustration from "../../../assets/login/login_illustration.svg";
import { Typography } from "../../../design-system";
import dots from "../../../assets/auth/dots.svg";

function RightSideContext() {
  return (
    <div className="relative w-full px-5 flex flex-col justify-center items-center max-lg:hidden overflow-hidden">
      <img src={dots} alt="" className=" absolute top-0 right-5 z-0 opacity-90" />
      <img src={dots} alt="" className=" absolute bottom-0 left-6 z-[-1] opacity-90" />
      <img
        className="xl:w-[700px] lg:w-[500px] "
        src={LoginIllustration}
        alt=""
      />
      <div className="text-center max-w-[400px]">
        <Typography className="!mb-3" variant="h5">
          Efficient, Fast and Reliable
        </Typography>
        <Typography variant="body4" color="gray.300">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </Typography>
      </div>
    </div>
  );
}

export default RightSideContext;
