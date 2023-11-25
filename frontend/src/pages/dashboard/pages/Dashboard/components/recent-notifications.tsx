import { useState, useEffect } from "react";
import { Typography } from "../../../../../design-system";
import { notifications } from "../types";
import { useMutation } from "react-query";
import { recentNotifications } from "../api-dashboard";

export default function RecentNotifications() {
  const [data, setData] = useState<notifications[] | null>(null);
  const { mutateAsync } = useMutation(recentNotifications);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await mutateAsync();
        setData(result?.notifications);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [mutateAsync]);

  return (
    <section className="bg-white rounded-lg border border-gray-200 border-opacity-20">
      <div className="grid gap-5 bg-white  rounded-lg p-4">
        <Typography className="!text-base !font-bold">
          Recent Notifications
        </Typography>
        {data &&
          data.map((notification: notifications, index: number) => {
            return (
              <div className="border-b border-gray-100 border-opacity-20 flex justify-between">
                <Typography className=" pb-3" key={index}>
                  {notification?.description}
                </Typography>
                <Typography className=" pb-3" key={index}>
                  {notification?.createAt}
                </Typography>
              </div>
            );
          })}
      </div>
    </section>
  );
}
