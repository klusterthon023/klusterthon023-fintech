import { Typography } from "../../../../design-system";

export default function KeyFeaturesText() {
  return (
    <div className="pt-2 grid gap-4 text-center">
      <Typography
        fontWeight={600}
        variant="body3"
        color="secondary.300"
        className="text-base"
      >
        KEY FEATURES
      </Typography>
      <Typography variant="h3" className="!text-4xl !font-semibold">
        Smart Solution for Your Online Transaction
      </Typography>
    </div>
  );
}
