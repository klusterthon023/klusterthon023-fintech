import { Typography } from "../../../../design-system";

export default function WhatWeDoTitle() {
  return (
    <div className="grid gap-10">
      <div className="flex items-center flex-col gap-4">
        <Typography
          variant="body3"
          color="secondary.200"
          className=" uppercase text-center"
        >
          WHAT WE DO
        </Typography>
        <Typography className="!max-w-[28ch] text-center !text-3xl md:!text-4xl !font-semibold md:!font-bold">
          Access the Smartest Payment Solution at Your Fingertips
        </Typography>
      </div>
    </div>
  );
}
