import { useQuery } from "react-query";
import { Typography } from "../../../../../design-system";
import { showStatics } from "../api-dashboard";
import graphesRed from "../../../../../assets/dashboard/graphes-red.svg";
import graphesGreen from "../../../../../assets/dashboard/graphs-green.svg";
import arrowUp from "../../../../../assets/dashboard/arrow-up.svg";
import arrowDown from "../../../../../assets/dashboard/arrow-down.svg";
import TopStaticsLoadingSkeleton from "./top-statics-skeleton";

export default function TopStatics() {
  const { data, isLoading } = useQuery(["showStatics"], showStatics);
  console.log(data);
  if (isLoading) {
    return <TopStaticsLoadingSkeleton />;
  }

  return (
    <section>
      <div className="flex flex-col md:flex-row gap-5 w-full">
        <div className="w-full flex items-center bg-white border border-gray-200 border-opacity-20 rounded-lg p-4">
          <div className="grid gap-2 w-full">
            <Typography variant="body4" className="!font-semibold !pb-2">
              Total Clients
            </Typography>
            <Typography
              variant="h5"
              className="!flex !items-center gap-1 !font-bold"
            >
              {data?.numberOfClients}
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
          <div className="">
            <img src={graphesGreen} alt="" className="mx-auto" />
          </div>
        </div>
        <div className="w-full flex items-center bg-white border border-gray-200 border-opacity-20 rounded-lg p-4">
          <div className="grid gap-2 w-full">
            <Typography variant="body4" className="!font-semibold !pb-2">
              Invoice Generated
            </Typography>
            <Typography
              variant="h5"
              className="!flex !items-center gap-1 !font-bold"
            >
              {data?.numberOfInvoices}
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
          <div className="">
            <img src={graphesRed} alt="" className="mx-auto" />
          </div>
        </div>
        <div className="w-full flex items-center bg-white border border-gray-200 border-opacity-20 rounded-lg p-4">
          <div className="grid gap-2 w-full">
            <Typography variant="body4" className="!font-semibold !pb-2">
              Revenue Generated
            </Typography>
            <Typography
              variant="h5"
              className="!flex !items-center gap-1 !font-bold"
            >
              {data?.totalRevenueGenerated}
            </Typography>
            <div className=" flex items-center gap-1">
              <img src={arrowUp} alt="" />
              <Typography variant="body4" className=" !text-[#569E44]">
                24%
              </Typography>
              <Typography variant="body5" color="gray.100">
                vs last month
              </Typography>
            </div>
          </div>
          <div className="">
            <img src={graphesGreen} alt="" className="mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
