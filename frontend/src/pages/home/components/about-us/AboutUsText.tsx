import { Typography } from "../../../../design-system";
import AboutUsStatics from "./AboutUsStatics";

export default function AboutUsText() {
  return (
    <div className="flex flex-col gap-12">
      <div className="grid gap-4">
        <Typography
          variant="body3"
          color="secondary.300"
          className=" uppercase"
        >
          ABOUT US
        </Typography>
        <Typography fontWeight={600} className="!text-[36px]" variant="h3">
          We Are First of a Kind in Payment Solution Implementation
        </Typography>
      </div>
      <div className="flex flex-col gap-4">
        <Typography variant="body3" color="gray.300">
          At{" "}
          <Typography color="tertiary.300" className=" !inline-block">
            InvoiceHub
          </Typography>
          , we believe in making business payments hassle-free. Our innovative
          application empowers business owners to effortlessly create client
          profiles, track payment transactions, and receive real-time alerts foe
          unpaid invoices.{" "}
        </Typography>
        <Typography variant="body3" color="gray.300">
          Say goodbye to payment woes and experience a streamlined payment
          management system tailored just for you. InvoiceHub, a smarter way to
          invoice!
        </Typography>
      </div>
      <AboutUsStatics />
    </div>
  );
}
