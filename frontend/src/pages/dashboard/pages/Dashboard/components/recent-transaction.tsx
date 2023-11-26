import { Link } from "react-router-dom";
import { Table, Typography } from "../../../../../design-system";
import { RouteNames } from "../../../../../routers/interface";
import { useQuery } from "react-query";
import { getRecentTransactions } from "../api-dashboard";
import { custom_columns } from "../types/columns";
import { useEffect, useState } from "react";
import RecentTransactionsSkeleton from "./recent-transaction-skeleton";

type invoice = {
  id: string;
  total_amount: number;
  status: "Paid" | "Pending" | "Canceled";
  due_date: string;
};

export default function RecentTransactions() {
  const { data, isLoading } = useQuery(["TRANSACTIONS"], getRecentTransactions);
  const [invoiceList, setInvoiceList] = useState<invoice[]>([]);

  useEffect(() => {
    if (data?.data) {
      console.log(data.data[0].id);
      setInvoiceList(data.data.slice(0, 5));
    }
  }, [data]);

  if (isLoading) {
    return <RecentTransactionsSkeleton />;
  }
  return (
    <section>
      <div className="w-full pb-4 grid gap-5 bg-white border border-gray-200 border-opacity-20 rounded-lg p-4">
        <Typography className="!text-base !font-bold">
          Recent Transactions
        </Typography>
        {invoiceList && invoiceList.length > 0 && (
          <>
            <Table columns={custom_columns} dataSource={invoiceList} />
            <Link to={RouteNames.INVOICE}>
              <Typography
                variant="body4"
                color="primary"
                className=" underline"
              >
                See all Transactions
              </Typography>
            </Link>
          </>
        )}
        {invoiceList.length === 0 && (
          <Typography color="gray.300" variant="body4" className="text-center">
            No recent transactions
          </Typography>
        )}
      </div>
    </section>
  );
}
