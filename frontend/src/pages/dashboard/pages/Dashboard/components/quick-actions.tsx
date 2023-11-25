import { Typography } from "../../../../../design-system";
import createClient from "../../../../../assets/dashboard/create-client.svg";
import createInvoice from "../../../../../assets/dashboard/create-invoice.svg";

export default function QuickActions() {
  return (
    <section className="flex flex-col gap-4">
      <Typography>Quick Actions</Typography>
      <div className="flex flex-col md:flex-row gap-5 w-full">
        <div className="flex gap-3 items-center w-full bg-white border border-gray-200 border-opacity-20 rounded-lg p-4">
          <img src={createClient} alt="create client" />
          <div>
            <Typography className="!text-base !font-bold">
              Create client
            </Typography>
            <Typography className="!flex !items-center gap-1 !text-gray-200 !text-xs">
              Add new customer data
            </Typography>
          </div>
        </div>
        <div className="flex gap-3 items-center w-full bg-white border border-gray-200 border-opacity-20 rounded-lg p-4">
          <img src={createInvoice} alt="create client" />
          <div>
            <Typography className="!text-base !font-bold">
              Create new invoice
            </Typography>
            <Typography className="!flex !items-center gap-1 !text-gray-200 !text-xs">
              Generate purchase quote for client
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
}
