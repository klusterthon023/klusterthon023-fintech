import { useMutation } from "react-query";
import { Typography } from "../../../../../design-system";
import { showStatics } from "../api-dashboard";
import { useEffect, useState } from "react";
import { dashboard } from "../types";
import graphesRed from "../../../../../assets/dashboard/graphes-red.svg";
import graphesGreen from "../../../../../assets/dashboard/graphs-green.svg";
import arrowUp from "../../../../../assets/dashboard/arrow-up.svg";
import arrowDown from "../../../../../assets/dashboard/arrow-down.svg";
import TopStaticsLoadingSkeleton from "./top-statics-skeleton";

export default function TopStatics() {
  const [data, setData] = useState<dashboard | null>(null);
  const { mutateAsync, isLoading } = useMutation(showStatics);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await mutateAsync();
        setData(result.data);
        console.log(result.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [mutateAsync]);

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
              {data?.totalCustomers}
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
              {data?.invoicesGenerated}
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
              {data?.totalAmountGenerated}
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
