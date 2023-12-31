import { useQuery } from "react-query";
import { Typography } from "../../../../../design-system";
import { showStatics } from "../../Dashboard/api-dashboard";
import CreateInvoice from "./CreateInvoice";
import TopStaticsLoadingSkeleton from "../../Dashboard/components/top-statics-skeleton";
import graphesGreen from "../../../../../assets/dashboard/graphs-green.svg";
import classNames from "classnames";

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
        <div className="w-full  flex items-center bg-white border border-gray-200 border-opacity-20 rounded-lg p-4">
          <div className="grid gap-2 !w-full">
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
              <Typography
                variant="body4"
                className={classNames({
                  ["!text-green-400"]: data?.percentageChangeInRevenue! > 0,
                  ["!text-color-red"]: data?.percentageChangeInRevenue! < 0,
                })}
              >
                {data?.percentageChangeInRevenue}%
              </Typography>
              <Typography color="gray.300" variant="body5">
                Vs last month
              </Typography>
            </div>
          </div>
          <img src={graphesGreen} alt="" className="mx-auto" />
        </div>
        <div className="w-full  flex items-center bg-white border border-gray-200 border-opacity-20 rounded-lg p-4">
          <div className="grid gap-2 !w-full">
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
              <Typography
                variant="body4"
                className={classNames({
                  ["!text-green-400"]:
                    data?.percentageChangeInNumberOfInvoices! > 0,
                  ["!text-color-red"]:
                    data?.percentageChangeInNumberOfInvoices! < 0,
                })}
              >
                {data?.percentageChangeInNumberOfInvoices}%
              </Typography>
              <Typography color="gray.300" variant="body5">
                Vs last month
              </Typography>
            </div>
          </div>
          <img src={graphesGreen} alt="" className="mx-auto" />
        </div>
      </div>
    </section>
  );
}

export default FirstRow;
