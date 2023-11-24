import { Typography } from "../../../../../design-system";

export default function TopStatics() {
  return (
    <section>
      <div className="flex flex-col md:flex-row gap-5 w-full">
        <div className="w-full bg-white border border-gray-200 border-opacity-20 rounded-lg p-4">
          <Typography className="!text-sm !font-bold">Total Clients</Typography>
          <Typography className="!font-bold"> - </Typography>
          <Typography className="!flex !items-center gap-1">
            {" "}
            0%{" "}
            <Typography color="gray.300" className="!text-xs">
              VS last month
            </Typography>
          </Typography>
        </div>
        <div className="w-full bg-white border border-gray-200 border-opacity-20 rounded-lg p-4">
          <Typography className="!text-sm !font-bold">
            Invoice Generated{" "}
          </Typography>
          <Typography className="!font-bold"> - </Typography>
          <Typography className="!flex !items-center gap-1">
            {" "}
            0%{" "}
            <Typography color="gray.300" className="!text-xs">
              VS last month
            </Typography>
          </Typography>
        </div>
        <div className="w-full bg-white border border-gray-200 border-opacity-20 rounded-lg p-4">
          <Typography className="!text-sm !font-bold">
            Revenue Generated
          </Typography>
          <Typography className="!font-bold"> - </Typography>
          <Typography className="!flex !items-center gap-1">
            {" "}
            0%{" "}
            <Typography color="gray.300" className="!text-xs">
              VS last month
            </Typography>
          </Typography>
        </div>
      </div>
    </section>
  );
}
