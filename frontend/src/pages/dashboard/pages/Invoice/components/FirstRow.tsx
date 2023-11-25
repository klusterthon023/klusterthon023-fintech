import { Typography } from "../../../../../design-system";
import CreateInvoice from "./CreateInvoice";

function FirstRow() {
  return (
    <div className="flex max-md:flex-col gap-5 max-md:justify-center justify-between items-center">
      <CreateInvoice />
      <div className="w-full h-[150px] bg-white border border-gray-200 border-opacity-20 rounded-lg p-4">
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
      <div className="w-full h-[150px] bg-white border border-gray-200 border-opacity-20 rounded-lg p-4">
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
    </div>
  );
}

export default FirstRow;
