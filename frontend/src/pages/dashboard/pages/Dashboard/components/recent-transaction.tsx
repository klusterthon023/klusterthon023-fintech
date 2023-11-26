import { Link } from "react-router-dom";
import { Table, Typography } from "../../../../../design-system";
import { RouteNames } from "../../../../../routers/interface";

type invoice = {
  invoice_id: string;
  client_name: string;
  email: string;
  total_amount: number;
  status: "Paid" | "Pending" | "Canceled";
  date: string;
};

const invoices: invoice[] = [
  {
    invoice_id: "INV1030",
    client_name: "Darrell Steward",
    email: "example@email.com",
    total_amount: 56000,
    status: "Paid",
    date: "November 27, 2023",
  },
  {
    invoice_id: "INV03F1",
    client_name: "Cameron Williamson",
    email: "example@email.com",
    total_amount: 64000,
    status: "Pending",
    date: "May 31, 2024",
  },
  {
    invoice_id: "INV037F",
    client_name: "Leslie Alexander",
    email: "example@email.com",
    total_amount: 48000,
    status: "Paid",
    date: "November 27, 2023",
  },
  {
    invoice_id: "INV037F",
    client_name: "Darrell Steward",
    email: "example@email.com",
    total_amount: 56000,
    status: "Paid",
    date: "February 24, 2024",
  },
];

const columns = [
  {
    title: "Invoice ID",
    dataIndex: "invoice_id",
    key: "1",
    sortable: false,
    render: (invoice_id: string) => {
      return (
        <div className="flex gap-2 items-center bg-white">
          <Typography
            fontWeight={500}
            variant={"body4"}
            className="cursor-pointer"
            color={"gray.600"}
          >
            {invoice_id}
          </Typography>
        </div>
      );
    },
  },
  {
    title: "Client name",
    dataIndex: "client_name",
    key: "2",
    sortable: true,
    render: (client_name: string) => {
      return (
        <Typography variant={"body4"} color={"gray.600"}>
          {client_name}
        </Typography>
      );
    },
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "3",
    render: (email: number) => {
      return (
        <Typography variant={"body4"} color={"gray.600"}>
          {email}
        </Typography>
      );
    },
  },
  {
    title: "Total amount (₦)",
    dataIndex: "total_amount",
    key: "4",
    render: (total_amount: string) => {
      return (
        <Typography variant={"body4"} color={"gray.600"}>
          {total_amount}
        </Typography>
      );
    },
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "5",
    render: (status: string) => {
      if (status === "Pending") {
        return (
          <Typography
            className="!text-[#F27E3B] !border px-[12px] py-[2px] !border-[#F27E3B] !bg-orange-50 !rounded-xl"
            variant={"body4"}
            color={"gray.600"}
          >
            {status}
          </Typography>
        );
      }
      return (
        <Typography
          className="!text-[#3C6F30] !border px-[12px] py-[2px] !bg-green-50 !border-[#3C6F30] !rounded-xl"
          variant={"body4"}
          color={"gray.600"}
        >
          {status}
        </Typography>
      );
    },
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "6",
    render: (date: string) => {
      return (
        <Typography variant={"body4"} color={"gray.600"}>
          {date}
        </Typography>
      );
    },
  },
];

export default function RecentTransactions() {
  return (
    <section>
      <div className="w-full pb-4 grid gap-5 bg-white border border-gray-200 border-opacity-20 rounded-lg p-4">
        <Typography className="!text-base !font-bold">
          Recent Transactions
        </Typography>
        <Table columns={columns} dataSource={invoices} />
        <Link to={RouteNames.INVOICE}>
          <Typography variant="body4" color="primary" className=" underline">
            See all Transactions
          </Typography>
        </Link>
      </div>
    </section>
  );
}
