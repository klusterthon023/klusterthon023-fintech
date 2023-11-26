import { Button, Typography } from "../../../../design-system";
import HeroAvatars from "./HeroAvatars";
import decorator from "../../../../assets/home/decorator.svg";
import { Link } from "react-router-dom";
import { RouteNames } from "../../../../routers/interface";

export default function HeroText() {
  return (
    <section className="relative grid gap-12">
      <img
        src={decorator}
        alt=""
        className=" absolute bottom-[-0%] left-[100%] hidden lg:block"
      />
      <div className="grid gap-4">
        <div className="flex gap-3 items-center">
          <Typography color="secondary.300" fontWeight={500}>
            SIMPLE
          </Typography>
          <div className="w-[5px] h-[5px] rounded-full bg-[#73AE64]"></div>
          <Typography color="secondary.300" fontWeight={500}>
            TRANSPARENT
          </Typography>
          <div className="w-[5px] h-[5px] rounded-full bg-[#73AE64]"></div>
          <Typography color="secondary.300" fontWeight={500}>
            SECURE
          </Typography>
        </div>
        <div className="w-full">
          <Typography className="!w-full !text-4xl md:!text-5xl" variant="h1">
            The Efficient Way to Manage your
            <Typography
              className="!w-full !text-4xl md:!text-5xl"
              variant="h1"
              color="tertiary.300"
            >
              Online Payment
            </Typography>{" "}
            Transaction
          </Typography>
        </div>
      </div>
      <div>
        <Typography>
          Streamlining your finances effortlessly, we simplify online payments
          with our efficient payment management system.
        </Typography>
      </div>
      <Link to={RouteNames.SIGN_UP} className="relative">
        <div className="absolute left-[3px] top-[7px] bg-black w-[205px] h-[47px] rounded-lg z-10"></div>
        <Button color="tertiary" className="z-30 relative">
          Open a Free Account
        </Button>
      </Link>

      <HeroAvatars />
    </section>
  );
}
