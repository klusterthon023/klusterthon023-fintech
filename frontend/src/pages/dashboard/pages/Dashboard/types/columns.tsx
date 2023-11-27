import dayjs from "dayjs";
import { Typography } from "../../../../../design-system";
import { Link } from "react-router-dom";
import { RouteNames } from "../../../../../routers/interface";
export const custom_columns = (notNavigatable?: boolean) => [
  {
    title: "Invoice ID",
    dataIndex: "id",
    key: "1",
    sortable: false,
    render: (id: string) => {
      return (
        <div className="flex gap-2 items-center ">
          {!notNavigatable ? (
            <Typography
              to={`${RouteNames.INVOICE}/${id}`}
              component={Link}
              fontWeight={500}
              variant={"body4"}
              className="cursor-pointer hover:!text-color-primary"
              color={"gray.600"}
            >
              {id}
            </Typography>
          ) : (
            <Typography
              fontWeight={500}
              variant={"body4"}
              className="cursor-pointer hover:!text-color-primary"
              color={"gray.600"}
            >
              {id}
            </Typography>
          )}
        </div>
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
            className="!text-[#F27E3B] !border px-[13.5px] py-[1.5px] !border-[#F27E3B] !bg-orange-50 !rounded-xl"
            variant={"body4"}
            color={"gray.600"}
          >
            {status}
          </Typography>
        );
      }
      return (
        <Typography
          className="!text-[#3C6F30] !border px-[25px] py-[1.5px] !bg-green-50 !border-[#3C6F30] !rounded-xl"
          variant={"body4"}
          color={"gray.600"}
        >
          {status}
        </Typography>
      );
    },
  },
  {
    title: "Due Date",
    dataIndex: "due_date",
    key: "6",
    render: (due_date: string) => {
      return (
        <Typography variant={"body4"} color={"gray.600"}>
          {dayjs(due_date).format("MMMM D, YYYY")}
        </Typography>
      );
    },
  },
];
