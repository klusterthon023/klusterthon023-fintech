import { Typography } from "../../../design-system";
import FinanceDiscussion from "../../../assets/auth/FinanceDiscussion.svg";
import dots from "../../../assets/auth/dots.svg";

export default function SignUpImage() {
  return (
    <section className="hidden lg:block relative pt-[70px] min-h-screen">
      <img src={FinanceDiscussion} alt="" className=" xl:mx-auto" />
      <img
        src={dots}
        alt=""
        className=" absolute top-0 right-5 z-0 opacity-90"
      />
      <img
        src={dots}
        alt=""
        className=" absolute bottom-0 left-6 z-[-1] opacity-90"
      />
      <div className="flex justify-center items-center text-center mb-5">
        <div className="flex justify-center flex-col max-w-[400px]">
          <Typography className="!mb-3" variant="h5">
            Efficient, Fast and Reliable
          </Typography>
          <Typography variant="body4" color="gray.300">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Typography>
        </div>
      </div>
    </section>
  );
}
