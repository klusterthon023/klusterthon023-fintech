import { Typography } from "../../../../design-system";
import paymentManagementIcon from "../../../../assets/home/payment-managment.svg";
import featuresArrowIcon from "../../../../assets/home/features-arrow.svg";
import arrowOrange from "../../../../assets/home/arrow-orange.svg";
import trackingIcon from "../../../../assets/home/tracking.svg";
import paymentTrackingIcon from "../../../../assets/home/payment-tracking.svg";
import dashboardIcon from "../../../../assets/home/dashboard.svg";
import clientManagementIcon from "../../../../assets/home/client-mangament.svg";
import objectIcon from "../../../../assets/home/object.svg";
import { useState } from "react";

export default function Features() {
  const [isHovered, setIsHovered] = useState({
    paymentManagement: false,
    invoiceTracking: false,
    integratedPayments: false,
    personalDashboard: false,
    clientManagement: false,
  });

  const handleMouseEnter = (card: keyof typeof isHovered) => {
    setIsHovered({
      paymentManagement: false,
      invoiceTracking: false,
      integratedPayments: false,
      personalDashboard: false,
      clientManagement: false,
      [card]: true,
    });
  };

  const handleMouseLeave = () => {
    setIsHovered({
      paymentManagement: false,
      invoiceTracking: false,
      integratedPayments: false,
      personalDashboard: false,
      clientManagement: false,
    });
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      <div
        data-aos="zoom-in-down"
        data-aos-duration="5000"
        onMouseEnter={() => handleMouseEnter("paymentManagement")}
        onMouseLeave={() => handleMouseLeave()}
        className="mx-auto flex flex-col gap-6 md:max-w-[350px]
        p-6 justify-center items-stretch hover:shadow-lg transition-shadow duration-500 ease-in-out"
      >
        <img src={paymentManagementIcon} alt="" className=" mx-auto" />
        <Typography variant="h6" className="!text-xl !font-semibold !mx-auto">
          Payment Management
        </Typography>
        <Typography
          variant="body3"
          color="gray.300"
          className="!text-center !text-base"
        >
          Facilitating secure transactions and overseeing financial flows via
          seamless payment management solutions
        </Typography>
        <img
          src={isHovered.paymentManagement ? arrowOrange : featuresArrowIcon}
          alt=""
          className="mx-auto"
        />
      </div>
      <div
        data-aos="zoom-in-down"
        data-aos-duration="5000"
        onMouseEnter={() => handleMouseEnter("invoiceTracking")}
        onMouseLeave={() => handleMouseLeave()}
        className="mx-auto flex flex-col gap-6 md:max-w-[350px] p-6 justify-center
        items-stretch hover:shadow-lg transition-shadow duration-500 ease-in-out"
      >
        <img src={trackingIcon} alt="" className=" mx-auto" />
        <Typography variant="h6" className="!text-xl !font-semibold !mx-auto">
          Invoice Tracking
        </Typography>
        <Typography
          variant="body3"
          color="gray.300"
          className="!text-center !text-base"
        >
          We enhance financial processes by automating accurate invoice tracking
          for seamless management
        </Typography>
        <img
          src={isHovered.invoiceTracking ? arrowOrange : featuresArrowIcon}
          alt=""
          className="mx-auto"
        />
      </div>
      <div
        data-aos="zoom-in-down"
        data-aos-duration="5000"
        onMouseEnter={() => handleMouseEnter("integratedPayments")}
        onMouseLeave={() => handleMouseLeave()}
        className="mx-auto flex flex-col gap-6 md:max-w-[350px] p-6 justify-center
        items-stretch hover:shadow-lg transition-shadow duration-500 ease-in-out"
      >
        <img src={paymentTrackingIcon} alt="" className=" mx-auto" />
        <Typography variant="h6" className="!text-xl !font-semibold !mx-auto">
          Integrated Payments
        </Typography>
        <Typography
          variant="body3"
          color="gray.300"
          className="!text-center !text-base"
        >
          We specialize in delivering secure and efficient payment solutions,
          ensuring seamless financial transactions for our clients
        </Typography>
        <img
          src={isHovered.integratedPayments ? arrowOrange : featuresArrowIcon}
          alt=""
          className="mx-auto"
        />
      </div>
      <div
        data-aos="zoom-in-down"
        data-aos-duration="5000"
        onMouseEnter={() => handleMouseEnter("personalDashboard")}
        onMouseLeave={() => handleMouseLeave()}
        className="mx-auto flex flex-col gap-6 md:max-w-[350px] p-6 justify-center
        items-stretch hover:shadow-lg transition-shadow duration-500 ease-in-out"
      >
        <img src={dashboardIcon} alt="" className=" mx-auto" />
        <Typography variant="h6" className="!text-xl !font-semibold !mx-auto">
          Personal Dashboard
        </Typography>
        <Typography
          variant="body3"
          color="gray.300"
          className="!text-center !text-base"
        >
          Integrated user-centric interface that offers insights, data, and
          tools for organizing and facilitating informed decisions and task
          management
        </Typography>
        <img
          src={isHovered.personalDashboard ? arrowOrange : featuresArrowIcon}
          alt=""
          className="mx-auto"
        />
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
        onMouseEnter={() => handleMouseEnter("clientManagement")}
        onMouseLeave={() => handleMouseLeave()}
        className="mx-auto flex flex-col gap-6 md:max-w-[350px] p-6 justify-center
        items-stretch hover:shadow-lg transition-shadow duration-500 ease-in-out"
      >
        <img src={clientManagementIcon} alt="" className=" mx-auto" />
        <Typography variant="h6" className="!text-xl !font-semibold !mx-auto">
          Client Management
        </Typography>
        <Typography
          variant="body3"
          color="gray.300"
          className="!text-center !text-base"
        >
          Our solution facilitate the process of creating, updating, and
          managing clients ensuring seamless communication
        </Typography>
        <img
          src={isHovered.clientManagement ? arrowOrange : featuresArrowIcon}
          alt=""
          className="mx-auto"
        />
      </div>
    </div>
  );
}
