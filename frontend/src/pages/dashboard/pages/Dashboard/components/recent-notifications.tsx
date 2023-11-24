import { Typography } from "../../../../../design-system";

export default function RecentNotifications() {
  return (
    <section className="bg-white rounded-lg border border-gray-200 border-opacity-20">
      <div className="grid gap-5 bg-white  rounded-lg p-4">
        <Typography className="!text-base !font-bold">
          Recent Notifications
        </Typography>
        <Typography className=" !text-gray-200 !text-sm">
          {" "}
          No notifications yet{" "}
        </Typography>
      </div>
    </section>
  );
}
