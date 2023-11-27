import { useQuery } from "react-query";
import { Typography } from "../../../../../design-system";
import { showStatics } from "../../Dashboard/api-dashboard";
import CreateInvoice from "./CreateInvoice";
import TopStaticsLoadingSkeleton from "../../Dashboard/components/top-statics-skeleton";
import graphesGreen from "../../../../../assets/dashboard/graphs-green.svg";

function FirstRow() {
  const { data, isLoading } = useQuery(["showStatics"], showStatics);
  if (isLoading) {
    return <TopStaticsLoadingSkeleton />;
  }
  return (
    <section>
      <div className="flex flex-col lg:flex-row gap-5 w-full mx-auto">
        <div className="w-full">
          <CreateInvoice />
        </div>
        <div className="w-full max-sm:w-[300px] flex flex-col md:flex-row items-center bg-white border border-gray-200 border-opacity-20 rounded-lg p-4">
          <div className="grid gap-2 w-full">
            <Typography variant="body4" className="!font-semibold !pb-2">
              Total Transaction
            </Typography>
            <Typography
              variant="h5"
              className="!flex !items-center gap-1 !font-bold"
            >
              {data?.totalRevenueGenerated ? data?.totalRevenueGenerated : 0}
            </Typography>
            <div className="flex items-center gap-2">
              <Typography variant="body4" className="!text-green-400">
                {data?.percentageChangeInRevenue}%
              </Typography>
              <Typography color="gray.300" variant="body5">
                Vs last month
              </Typography>
            </div>
          </div>
          <div className="grid md:flex justify-start w-full">
            <img src={graphesGreen} alt="" className="mx-auto" />
          </div>
        </div>
        <div className="w-full max-sm:w-[300px] flex flex-col md:flex-row items-center bg-white border border-gray-200 border-opacity-20 rounded-lg p-4">
          <div className="grid gap-2 w-full">
            <Typography variant="body4" className="!font-semibold !pb-2">
              Invoice Generated
            </Typography>
            <Typography
              variant="h5"
              className="!flex !items-center gap-1 !font-bold"
            >
              {data?.numberOfInvoices ? data?.numberOfInvoices : 0}
            </Typography>
            <div className="flex items-center gap-2">
              <Typography variant="body4" className="!text-green-400">
                {data?.percentageChangeInNumberOfInvoices}%
              </Typography>
              <Typography color="gray.300" variant="body5">
                Vs last month
              </Typography>
            </div>
          </div>
          <div className="grid md:flex justify-start w-full">
            <img src={graphesGreen} alt="" className="mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FirstRow;
