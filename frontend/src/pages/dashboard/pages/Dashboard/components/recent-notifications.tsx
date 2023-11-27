import { Typography } from "../../../../../design-system";
import { notifications } from "../types";
import { useQuery } from "react-query";
import { recentNotifications } from "../api-dashboard";
import RecentNotificationsLoadingSkeleton from "./recent-notifications-skeleton";

export default function RecentNotifications() {
  const { data, isLoading } = useQuery(["NOTIFICATION"], recentNotifications);

  if (isLoading) {
    return <RecentNotificationsLoadingSkeleton />;
  }
  return (
    <section className="bg-white max-lg:w-full lg:w-[35%] max-h-[550px] overflow-y-scroll rounded-lg border border-gray-200 border-opacity-20">
      <div className="grid gap-5 bg-white  rounded-lg p-4">
        <Typography variant="body3" className="!font-bold">
          Recent Notifications
        </Typography>
        {data &&
          data?.notifications?.map(
            (notification: notifications, index: number) => {
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
            }
          )}
      </div>
    </section>
  );
}
