import { useState, useEffect } from "react";
import { Typography } from "../../../../../design-system";
import { notifications } from "../types";
import { useMutation } from "react-query";
import { recentNotifications } from "../api-dashboard";
import RecentNotificationsLoadingSkeleton from "./recent-notifications-skeleton";

export default function RecentNotifications() {
  const [data, setData] = useState<notifications[] | null>(null);
  const { mutateAsync, isLoading } = useMutation(recentNotifications);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await mutateAsync();
        setData(result?.notifications as any);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [mutateAsync]);

  if (isLoading) {
    return <RecentNotificationsLoadingSkeleton />;
  }
  return (
    <section className="bg-white rounded-lg border border-gray-200 border-opacity-20">
      <div className="grid gap-5 bg-white  rounded-lg p-4">
        <Typography variant="body3" className="!font-bold">
          Recent Notifications
        </Typography>
        {data &&
          data.map((notification: notifications, index: number) => {
            return (
              <div className="border-b border-gray-100 border-opacity-20 flex justify-between">
                <Typography variant="body4" className=" pb-3" key={index}>
                  {notification?.description}
                </Typography>
                <Typography variant="body5" className=" pb-3" key={index}>
                  {notification?.createAt
                    .split("T")[0]
                    .split("-")
                    .reverse()
                    .join("/")}
                </Typography>
              </div>
            );
          })}
      </div>
    </section>
  );
}
