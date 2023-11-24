import { Typography } from "../../../../../design-system";

export default function RecentTransactions() {
  return (
    <section>
      <div className="w-full grid gap-5 bg-white border border-gray-200 border-opacity-20 rounded-lg p-4">
        <Typography className="!text-base !font-bold">
          Recent Transactions
        </Typography>
        <Typography className="text-center !text-gray-200 !text-sm">
          {" "}
          No recent transaction yet{" "}
        </Typography>
      </div>
    </section>
  );
}
