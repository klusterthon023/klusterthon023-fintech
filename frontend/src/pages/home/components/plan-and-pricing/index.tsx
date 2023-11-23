import { Typography } from "../../../../design-system";
import PricingCards from "./PricingCards";

function PlanAndPricing() {
  return (
    <section id="Pricing" className="p-16 max-md:p-8">
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
