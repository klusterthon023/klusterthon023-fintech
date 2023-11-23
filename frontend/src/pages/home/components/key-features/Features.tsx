import { Typography } from "../../../../design-system";
import paymentManagementIcon from "../../../../assets/home/payment-managment.svg";
import featuresArrowIcon from "../../../../assets/home/features-arrow.svg";
import trackingIcon from "../../../../assets/home/tracking.svg";
import paymentTrackingIcon from "../../../../assets/home/payment-tracking.svg";
import dashboardIcon from "../../../../assets/home/dashboard.svg";
import clientManagementIcon from "../../../../assets/home/client-mangament.svg";
import objectIcon from "../../../../assets/home/object.svg";

export default function Features() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      <div
        data-aos="zoom-in-down"
        data-aos-duration="5000"
        className="mx-auto flex flex-col gap-6 md:max-w-[350px] p-6 justify-center items-stretch"
      >
        <img src={paymentManagementIcon} alt="" className=" mx-auto" />
        <Typography className="!text-xl !font-semibold !mx-auto">
          Payment Management
        </Typography>
        <Typography color="gray.300" className="!text-center !text-base">
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut al
        </Typography>
        <img src={featuresArrowIcon} alt="" className="mx-auto" />
      </div>
      <div
        data-aos="zoom-in-down"
        data-aos-duration="5000"
        className="mx-auto flex flex-col gap-6 md:max-w-[350px] p-6 justify-center items-stretch"
      >
        <img src={trackingIcon} alt="" className=" mx-auto" />
        <Typography className="!text-xl !font-semibold !mx-auto">
          Invoice Tracking
        </Typography>
        <Typography color="gray.300" className="!text-center !text-base">
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut al
        </Typography>
        <img src={featuresArrowIcon} alt="" className=" mx-auto" />
      </div>
      <div
        data-aos="zoom-in-down"
        data-aos-duration="5000"
        className="mx-auto flex flex-col gap-6 md:max-w-[350px] p-6 justify-center items-stretch"
      >
        <img src={paymentTrackingIcon} alt="" className=" mx-auto" />
        <Typography className="!text-xl !font-semibold !mx-auto">
          Integrated Payments
        </Typography>
        <Typography color="gray.300" className="!text-center !text-base">
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut al
        </Typography>
        <img src={featuresArrowIcon} alt="" className=" mx-auto" />
      </div>
      <div
        data-aos="zoom-in-down"
        data-aos-duration="5000"
        className="mx-auto flex flex-col gap-6 md:max-w-[350px] p-6 justify-center items-stretch"
      >
        <img src={dashboardIcon} alt="" className=" mx-auto" />
        <Typography className="!text-xl !font-semibold !mx-auto">
          Personal Dashboard
        </Typography>
        <Typography color="gray.300" className="!text-center !text-base">
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut al
        </Typography>
        <img src={featuresArrowIcon} alt="" className=" mx-auto" />
      </div>
      <div
        data-aos="zoom-in-down"
        data-aos-duration="5000"
        className="mx-auto hidden md:flex flex-col gap-6 md:max-w-[350px] p-6 justify-center items-stretch"
      >
        <img src={objectIcon} alt="" className=" mx-auto" />
      </div>
      <div
        data-aos="zoom-in-down"
        data-aos-duration="5000"
        className="mx-auto flex flex-col gap-6 md:max-w-[350px] p-6 justify-center items-stretch"
      >
        <img src={clientManagementIcon} alt="" className=" mx-auto" />
        <Typography className="!text-xl !font-semibold !mx-auto">
          Client Management
        </Typography>
        <Typography color="gray.300" className="!text-center !text-base">
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut al
        </Typography>
        <img src={featuresArrowIcon} alt="" className=" mx-auto" />
      </div>
    </div>
  );
}
