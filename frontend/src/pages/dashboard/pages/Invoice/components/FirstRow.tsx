import { useQuery } from "react-query";
import { Typography } from "../../../../../design-system";
import { showStatics } from "../../Dashboard/api-dashboard";
import CreateInvoice from "./CreateInvoice";
import TopStaticsLoadingSkeleton from "../../Dashboard/components/top-statics-skeleton";
import arrowDown from "../../../../../assets/dashboard/arrow-down.svg";
import arrowUp from "../../../../../assets/dashboard/arrow-up.svg";
import graphesGreen from "../../../../../assets/dashboard/graphs-green.svg";
import graphesRed from "../../../../../assets/dashboard/graphes-red.svg";

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
            <div className=" flex items-center gap-1">
              <img src={arrowUp} alt="" />
              <Typography variant="body4" className=" !text-[#569E44]">
                56%
              </Typography>
              <Typography variant="body5" color="gray.100">
                vs last month
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
            <div className=" flex items-center gap-1">
              <img src={arrowDown} alt="" />
              <Typography variant="body4" color="red">
                5%
              </Typography>
              <Typography variant="body5" color="gray.100">
                vs last month
              </Typography>
            </div>
          </div>
          <div className="grid md:flex justify-start w-full">
            <img src={graphesRed} alt="" className="mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FirstRow;
