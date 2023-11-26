import { useState, useEffect } from "react";
import { useMutation } from "react-query";
import { Typography } from "../../../design-system";
import { recentNotifications } from "../pages/Dashboard/api-dashboard";
import { notifications } from "../pages/Dashboard/types";

export default function NotificationsWindow() {
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

  return (
    <section
      className="bg-white rounded-lg border border-gray-200 border-opacity-20 absolute top-[130%]
    right-[-200%] w-[300px] h-[300px] z-20"
    >
      <div className="grid gap-5 bg-white  rounded-lg p-4">
        <Typography variant="h6">Notification</Typography>
        {isLoading ? (
          // This is your skeleton component
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
          data.map((notification: notifications, index: number) => {
            return (
              <div className="border-b border-gray-100 border-opacity-20 flex justify-between">
                <Typography variant="body4" className=" pb-3" key={index}>
                  {notification?.description}
                </Typography>
                <Typography variant="body4" className=" pb-3" key={index}>
                  {notification?.createAt
                    .split("T")[0]
                    .split("-")
                    .reverse()
                    .join("/")}
                </Typography>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
}
