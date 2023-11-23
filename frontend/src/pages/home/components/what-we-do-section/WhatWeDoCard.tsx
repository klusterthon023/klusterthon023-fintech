import { Typography } from "../../../../design-system";
import arrowUpIcon from "../../../../assets/home/arrow-up.svg";
import searchIcon from "../../../../assets/home/search.svg";
import paymentIcon from "../../../../assets/home/payment.svg";
import groupIcon from "../../../../assets/home/group.svg";
import arrowDownIcon from "../../../../assets/home/arrow-down.svg";

export default function WhatWeDoCard() {
  return (
    <div className="relative flex flex-col justify-between gap-16 lg:gap-2 lg:flex-row">
      <img
        src={arrowDownIcon}
        alt=""
        data-aos="zoom-in-up"
        data-aos-duration="5000"
        className=" absolute left-[28%] top-[65%] hidden xl:block"
      />
      <img
        src={arrowUpIcon}
        alt=""
        data-aos="zoom-in-up"
        data-aos-duration="5000"
        className=" absolute left-[60%] top-[65%] hidden xl:block"
      />
      <div
        data-aos="zoom-in-up"
        data-aos-duration="5000"
        className="grid gap-6 text-center lg:max-w-[350px]"
      >
        <img src={paymentIcon} alt="" className="mx-auto" />
        <Typography variant="h4">Payment Solution</Typography>
        <Typography className="lg:max-w-[40ch]">
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut al
        </Typography>
      </div>
      <div
        data-aos="zoom-in-up"
        data-aos-duration="5000"
        className="grid gap-6 text-center lg:max-w-[350px] lg:transform lg:translate-y-[10rem] lg:mt-4"
      >
        <img src={searchIcon} alt="" className="mx-auto" />
        <Typography variant="h4">Invoice Tracking</Typography>
        <Typography className="lg:max-w-[40ch]">
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut al
        </Typography>
      </div>
      <div
        data-aos-duration="5000"
        data-aos="zoom-in-up"
        className="grid gap-6 text-center lg:max-w-[350px]"
      >
        <img src={groupIcon} alt="" className="mx-auto" />
        <Typography variant="h4">Client Management</Typography>
        <Typography className="lg:max-w-[40ch]">
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut al
        </Typography>
      </div>
    </div>
  );
}
