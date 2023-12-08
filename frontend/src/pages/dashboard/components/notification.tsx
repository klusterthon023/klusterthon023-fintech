import { useQuery } from "react-query";
import { Typography } from "../../../design-system";
import { recentNotifications } from "../pages/Dashboard/api-dashboard";
import { notifications } from "../pages/Dashboard/types";

export default function NotificationsWindow() {
  const { data, isLoading } = useQuery(["NOTIFICATION"], recentNotifications);

  return (
    <section className="border shadow-lg border-color-gray border-opacity-20 px-5 py-6 w-[460px] max-sm:w-[300px] max-sm:px-2 max-sm:h-[300px] max-h-[400px]   overflow-y-scroll rounded-lg bg-color-white ">
      <div className="grid gap-5 bg-white  rounded-lg p-4">
        <div className="flex justify-between items-center pb-3 border-b border-color-gray">
          <Typography variant="h6">Notification</Typography>
          <Typography variant="body4" color="primary">
            Mark all as read
          </Typography>
        </div>
        {isLoading ? (
          <div className="animate-pulse flex space-x-4">
            <div className="flex-1 space-y-4 py-1">
              <div className="h-4 bg-gray-100 rounded w-3/4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-100 rounded"></div>
                <div className="h-4 bg-gray-100 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        ) : (
          data &&
          data?.notifications?.map(
            (notification: notifications, index: number) => {
              return (
                <div
                  key={index}
                  className="border-b border-gray-100 border-opacity-20 pb-3 flex gap-4 justify-between"
                >
                  <Typography variant="body5">
                    {notification?.description}
                  </Typography>

                  <Typography variant="body5">
                    {notification?.createAt
                      .split("T")[0]
                      .split("-")
                      .reverse()
                      .join("/")}
                  </Typography>
                </div>
              );
            }
          )
        )}
      </div>
    </section>
  );
}
