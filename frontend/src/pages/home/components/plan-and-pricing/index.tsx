import { Typography } from "../../../../design-system";
import PricingCards from "./PricingCards";

function PlanAndPricing() {
  return (
    <section
      id="Pricing"
      className="py-16 px-4 md:px-0 max-md:py-8 container mx-auto"
    >
      <Typography
        className="!text-center !mb-4"
        color="secondary.200"
        variant="body1"
      >
        PLAN & PRICING
      </Typography>
      <Typography className="!text-center" variant="h3">
        Plans that Fit Your Scale
      </Typography>
      <PricingCards />
    </section>
  );
}

export default PlanAndPricing;
