import { Typography } from "../../../../design-system";
import arrowUpIcon from "../../../../assets/home/arrow-up.svg";
import searchIcon from "../../../../assets/home/search.svg";
import paymentIcon from "../../../../assets/home/payment.svg";
import groupIcon from "../../../../assets/home/group.svg";
import arrowDownIcon from "../../../../assets/home/arrow-down.svg";

export default function WhatWeDoCard() {
  return (
    <div className="relative grid gap-16 lg:gap-2 lg:grid-cols-3 lg:grid-rows-2 lg:items-center">
      <img
        src={arrowDownIcon}
        alt=""
        data-aos="zoom-in-up"
        data-aos-duration="5000"
        className=" absolute lg:left-[0%] xl:left-[27%] top-[30%] hidden xl:block"
      />
      <img
        src={arrowUpIcon}
        alt=""
        data-aos="zoom-in-up"
        data-aos-duration="5000"
        className=" absolute left-[55%] top-[30%] hidden xl:block"
      />
      <div
        data-aos="zoom-in-up"
        data-aos-duration="5000"
        className="grid gap-6 text-center lg:max-w-[350px] lg:row-start-1 lg:col-start-1"
      >
        <img src={paymentIcon} alt="" className="mx-auto" />
        <Typography variant="h4">Payment Solution</Typography>
        <Typography className="lg:max-w-[40ch]">
          We specialize in delivering secure and efficient payment solutions,
          ensuring seamless financial transactions for our clients
        </Typography>
      </div>
      <div
        data-aos="zoom-in-up"
        data-aos-duration="5000"
        className="grid gap-6 text-center lg:max-w-[350px] lg:row-start-2 lg:col-start-2 lg:mt-4"
      >
        <img src={searchIcon} alt="" className="mx-auto" />
        <Typography variant="h4">Invoice Tracking</Typography>
        <Typography className="lg:max-w-[40ch]">
          We enhance financial processes by automating accurate invoice tracking
          for seamless management
        </Typography>
      </div>
      <div
        data-aos-duration="5000"
        data-aos="zoom-in-up"
        className="grid gap-6 text-center lg:max-w-[350px] lg:row-start-1 lg:col-start-3"
      >
        <img src={groupIcon} alt="" className="mx-auto" />
        <Typography variant="h4">Client Management</Typography>
        <Typography className="lg:max-w-[40ch]">
          Our solution facilitate the process of creating, updating, and
          managing clients ensuring seamless communication
        </Typography>
      </div>
    </div>
  );
}
