import { useNavigate } from "react-router-dom";
import { Button, Input, Typography } from "../../design-system";
import { RouteNames } from "../../routers/interface";
import logo from "../../assets/invoice-hub-logo.svg";

function FooterContext() {
  const navigate = useNavigate();
  return (
    <footer className="flex justify-between max-lg:flex-col gap-20 items-center my-9">
      <div className="flex flex-col gap-6 lg:max-w-[433px] self-start">
        <div className="">
          <img src={logo} alt="invoicehub" />
        </div>
        <Typography variant="body4" color="gray.300">
          InvoiceHub, your go-to platform for effortless invoicing. Streamline
          payments, manage transactions, and simplify invoicing processes with
          ease and precision.
        </Typography>
        <div className="flex flex-col md:flex-row items-center gap-2 w-full">
          <div className="w-full">
            <Input placeholder="Enter email" />
          </div>
          <Button size="large" className="!w-full md:!w-auto">
            Subscribe
          </Button>
        </div>
      </div>
      <div className="w-full md:w-auto flex flex-wrap justify-between md:grid md:grid-cols-3 gap-[84px] max-sm:gap-3 item-center">
        <div className="mb-6">
          <Typography
            variant="body1"
            className="max-md:text-xl font-semibold mb-4 pb-[10px] "
          >
            Quick Links
          </Typography>
          <div className="w-9 bg-tertiary-300 h-[0.5px] mb-5" />
          <div className="flex flex-col gap-2">
            {QUICK_LINKS.map((label, index) => (
              <Typography
                key={index}
                variant="body3"
                onClick={() => {
                  navigate(RouteNames.HOME, {
                    state: { path: label },
                  });
                }}
                color="gray.300"
                className="hover:!text-tertiary-300 !max-sm:text-lg hover:underline cursor-pointer"
              >
                {label}
              </Typography>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <Typography
            variant="body1"
            className="max-md:text-xl font-semibold mb-4 pb-[10px] "
          >
            Support
          </Typography>
          <div className="w-9 bg-tertiary-300 h-[0.5px] mb-5" />
          <div className="flex flex-col gap-2">
            {SUPPORT.map((label, index) => (
              <Typography
                key={index}
                variant="body3"
                color="gray.300"
                className="hover:!text-tertiary-300 !max-sm:text-lg hover:underline cursor-pointer"
              >
                {label}
              </Typography>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <Typography
            variant="body1"
            className="max-md:text-xl font-semibold mb-4 pb-[10px] "
          >
            Contact Info
          </Typography>
          <div className="w-9 bg-tertiary-300 h-[0.5px] mb-5" />
          <div className="flex flex-col gap-2">
            {CONTACTS.map((label, index) => (
              <Typography
                key={index}
                variant="body3"
                color="gray.300"
                className="!max-sm:text-lg"
              >
                {label}
              </Typography>
            ))}
          </div>
          <div></div>
        </div>
      </div>
    </footer>
  );
}

export default FooterContext;

const QUICK_LINKS = [
  "Home",
  "About Us",
  "Features",
  "Pricing",
  "FAQ",
  "Contact",
];

const SUPPORT = ["Support", "Benefits", "Plan", "News & Articles", "Blog"];
const CONTACTS = [
  "Email: info@email.cpm",
  "Phone: +234 810 395 2995",
  "Address: Plot 123, ABC Rd.",
];
