import { useQuery } from "react-query";
import { Typography } from "../../../../../design-system";
import { showStatics } from "../api-dashboard";
import graphesGreen from "../../../../../assets/dashboard/graphs-green.svg";
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
              {data?.numberOfClients ? data?.numberOfClients : 0}
            </Typography>
            <div className="flex gap-2 items-center">
              <Typography variant="body4" className="!text-green-400">
                {data?.percentageChangeInNumberOFClients}%
              </Typography>
              <Typography color="gray.300" variant="body5">
                Vs last month
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
              {data?.numberOfInvoices ? data?.numberOfInvoices : 0}
            </Typography>
            <div className="flex gap-2 items-center">
              <Typography variant="body4" className="!text-green-400">
                {data?.percentageChangeInNumberOfInvoices}%
              </Typography>
              <Typography color="gray.300" variant="body5">
                Vs last month
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
              Revenue Generated
            </Typography>
            <Typography
              variant="h5"
              className="!flex !items-center gap-1 !font-bold"
            >
              {data?.totalRevenueGenerated ? data?.totalRevenueGenerated : 0}
            </Typography>
            <div className="flex gap-2 items-center">
              <Typography variant="body4" className="!text-green-400">
                {data?.percentageChangeInRevenue}%
              </Typography>
              <Typography color="gray.300" variant="body5">
                Vs last month
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
