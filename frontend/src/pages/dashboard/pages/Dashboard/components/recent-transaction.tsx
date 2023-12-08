import { Link } from "react-router-dom";
import { Table, Typography } from "../../../../../design-system";
import { RouteNames } from "../../../../../routers/interface";
import { useQuery } from "react-query";
import { getRecentTransactions } from "../api-dashboard";
import { custom_columns } from "../types/columns";
import { useEffect, useState } from "react";
import RecentTransactionsSkeleton from "./recent-transaction-skeleton";
import "react-datepicker/dist/react-datepicker.css";
import { useAppContext } from "../../../../../contexts";

type invoice = {
  id: string;
  total_amount: number;
  status: "Paid" | "Pending" | "Canceled";
  due_date: string;
  client_name: string; // Add this line
};

export default function RecentTransactions({
  notNavigatable,
  clientId,
  dashboardTransaction,
}: {
  notNavigatable?: boolean;
  clientId?: string;
  dashboardTransaction?: boolean;
}) {
  const { data, isLoading, refetch } = useQuery(
    ["TRANSACTIONS"],
    getRecentTransactions
  );
  const [invoiceList, setInvoiceList] = useState<invoice[]>([]);
  const { isInvoiceDataRefetched } = useAppContext();

  useEffect(() => {
    if (data?.data) {
      const newInvoiceList = data.data.map((invoice) => {
        const client_name = invoice.customers[0]?.name;
        return { ...invoice, client_name };
      });
      const clientByIdData = data?.data.filter(
        (invoice) => invoice.customer_id === clientId
      );

      setInvoiceList(
        clientId
          ? clientByIdData.slice(0, dashboardTransaction ? 3 : 5)
          : newInvoiceList.slice(0, dashboardTransaction ? 3 : 5)
      );
    }
  }, [data, clientId, dashboardTransaction]);

  useEffect(() => {
    if (isInvoiceDataRefetched) {
      refetch();
    }
  }, [isInvoiceDataRefetched]);

  if (isLoading) {
    return <RecentTransactionsSkeleton />;
  }
  return (
    <section>
      <div className="w-full pb-4 grid bg-white border border-gray-200 border-opacity-20 rounded-lg p-4">
        {!notNavigatable && (
          <Typography className="!text-base !font-bold">
            Recent Transactions
          </Typography>
        )}

        {invoiceList && invoiceList.length > 0 && (
          <>
            <Table
              columns={custom_columns(notNavigatable)}
              dataSource={invoiceList}
            />
            <Link to={RouteNames.INVOICE} className="pt-5">
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
          <>
            <Table
              columns={custom_columns(notNavigatable)}
              dataSource={invoiceList}
            />
            <Typography
              color="gray.300"
              variant="body4"
              className="text-center pt-5"
            >
              No recent transactions
            </Typography>
          </>
        )}
      </div>
    </section>
  );
}
