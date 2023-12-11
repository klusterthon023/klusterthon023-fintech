import { Typography } from "../../../../../design-system";
import { notifications } from "../types";
import { useQuery } from "react-query";
import { recentNotifications } from "../api-dashboard";
import RecentNotificationsLoadingSkeleton from "./recent-notifications-skeleton";
import { useNavigate } from "react-router-dom";
import { RouteNames } from "../../../../../routers/interface";
import classNames from "classnames";
import { useEffect } from "react";
import { useAppContext } from "../../../../../contexts";

export default function RecentNotifications() {
  const { data, isLoading, refetch } = useQuery(
    ["NOTIFICATION"],
    recentNotifications
  );

  const navigate = useNavigate();

  const { isCreateInvoiceModalOpen } = useAppContext();

  useEffect(() => {
    if (isCreateInvoiceModalOpen) {
      refetch();
    }
  }, [isCreateInvoiceModalOpen]);
  if (isLoading) {
    return <RecentNotificationsLoadingSkeleton />;
  }
  return (
    <section className="bg-white max-lg:w-full lg:w-[35%] max-h-[600px] overflow-y-scroll rounded-lg border border-gray-200 border-opacity-20">
      <div className="grid gap-5 bg-white  rounded-lg p-4">
        <Typography variant="body3" className="!font-bold">
          Recent Notifications
        </Typography>
        {data &&
          data?.notifications?.map(
            (notification: notifications, index: number) => {
              return (
                <div
                  onClick={() => {
                    if (
                      (notification.notification_type === "invoicePaid" ||
                        notification.notification_type === "invoiceCreate") &&
                      notification.invoice_id
                    ) {
                      navigate(
                        `${RouteNames.INVOICE}/${notification.invoice_id}`
                      );
                    }
                  }}
                  key={index}
                  className={classNames(
                    "border-b border-gray-100 border-opacity-20 pb-2 flex gap-4 justify-between",
                    {
                      ["hover:bg-neutral-100 cursor-pointer p-2 rounded-lg"]:
                        notification.notification_type === "invoicePaid" ||
                        notification.notification_type === "invoiceCreate",
                    }
                  )}
                >
                  <Typography
                    variant="body4"
                    className={classNames("", {
                      ["!text-color-primary"]:
                        notification.notification_type === "invoicePaid" ||
                        notification.notification_type === "invoiceCreate",
                    })}
                  >
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
          )}
      </div>
    </section>
  );
}
