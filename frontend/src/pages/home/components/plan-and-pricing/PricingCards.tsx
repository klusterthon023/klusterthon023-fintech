import { Button, Divider, Typography } from "../../../../design-system";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faClose } from "@fortawesome/free-solid-svg-icons";

function PricingCards() {
  return (
    <div className="mt-16 grid grid-cols-2 gap-12 max-md:grid-cols-1 items-center">
      {PRICING_LIST.map(({ id, price, plan_type, plan_type_description }) => (
        <div
          data-aos="zoom-in-up"
          data-aos-duration="5000"
          key={id}
          className="border border-gray-100 rounded-2xl p-6"
        >
          <div className="flex justify-between max-md:justify-center max-md:flex-col items-center">
            <div className="flex flex-col gap-1">
              <Typography variant="h6">{plan_type}</Typography>
              <Typography variant="body4" color="gray.300">
                {plan_type_description}
              </Typography>
            </div>
            <div className="flex items-end gap-1">
              <Typography variant="h3">{price}</Typography>
              <Typography color="gray.100">/ month</Typography>
            </div>
          </div>
          <Divider className="my-6" />
          <div className="flex flex-col space-y-5">
            {FEATURES.map((label, index) => {
              const allowed_plan = id === 1 && index > 3;
              return (
                <div className="flex gap-2 items-center">
                  <FontAwesomeIcon
                    icon={allowed_plan ? faClose : faCheck}
                    className={
                      allowed_plan ? `text-gray-100` : `text-secondary-300`
                    }
                  />
                  <Typography variant="body4" color="gray.100">
                    {label}
                  </Typography>
                </div>
              );
            })}
          </div>
          <Divider className="my-6" />

          <Button size="large" color="tertiary" fullWidth>
            Get Started
          </Button>
        </div>
      ))}
    </div>
  );
}

export default PricingCards;

const PRICING_LIST = [
  {
    id: 1,
    plan_type: "Basic Plan",
    plan_type_description: "Most popular plan for small enterprise",
    price: "₦5,500",
  },
  {
    id: 2,
    features: "",
    plan_type: "Business Plan",
    plan_type_description: "Advanced features and analytics",
    price: "₦9,500",
  },
];

const FEATURES = [
  "Access to basic features",
  "No setup fee",
  "Basic reporting & analytics",
  "Chat Support",
  "Automatic Updates",
  "Feature Request",
  "Analytics Report",
  "e-Wallet",
];
