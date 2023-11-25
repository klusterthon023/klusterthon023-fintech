import { useMutation } from "react-query";
import { Typography } from "../../../../../design-system";
import { showStatics } from "../api-dashboard";
import { useEffect, useState } from "react";
import { dashboard } from "../types";

export default function TopStatics() {
  const [data, setData] = useState<dashboard | null>(null);
  const { mutateAsync } = useMutation(showStatics);

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

  return (
    <section>
      <div className="flex flex-col md:flex-row gap-5 w-full">
        <div className="w-full bg-white border border-gray-200 border-opacity-20 rounded-lg p-4">
          <Typography className="!text-sm !font-bold !pb-2">
            Total Clients
          </Typography>
          <Typography className="!flex !items-center gap-1 !text-3xl !font-bold">
            {data?.totalCustomers}
          </Typography>
        </div>
        <div className="w-full bg-white border border-gray-200 border-opacity-20 rounded-lg p-4">
          <Typography className="!text-sm !font-bold !pb-2">
            Invoice Generated{" "}
          </Typography>
          <Typography className="!flex !items-center gap-1 !text-3xl !font-bold">
            {data?.invoicesGenerated}
          </Typography>
        </div>
        <div className="w-full bg-white border border-gray-200 border-opacity-20 rounded-lg p-4">
          <Typography className="!text-sm !font-bold !pb-2">
            Revenue Generated
          </Typography>

          <Typography className="!flex !items-center gap-1 !text-3xl !font-bold">
            {data?.totalAmountGenerated}
          </Typography>
        </div>
      </div>
    </section>
  );
}
