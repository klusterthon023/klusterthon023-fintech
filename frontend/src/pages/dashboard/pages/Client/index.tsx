import { motion } from "framer-motion";
import { useAppContext } from "../../../../contexts";
import { Button, Input, Table, Typography } from "../../../../design-system";
import { useQuery } from "react-query";
import { getAllClient } from "./client-api";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import { RouteNames } from "../../../../routers/interface";
import { useEffect, useState } from "react";
import { IClientType } from "./types";

const columns = [
  {
    title: "Client name",
    dataIndex: "name",
    key: "1",
    sortable: true,
    render: (client_name: string, record: IClientType) => {
      return (
        <Typography
          component={Link}
          to={`${RouteNames.CLIENT}/${record._id}`}
          fontWeight={500}
          variant={"body4"}
          className="cursor-pointer hover:!text-color-primary"
          color={"gray.600"}
        >
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
    title: "Category",
    dataIndex: "customer_type",
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
    title: "Location",
    dataIndex: "business_address",
    key: "5",
    render: (business_address: string) => {
      return (
        <Typography variant={"body4"} color={"gray.600"}>
          {business_address}
        </Typography>
      );
    },
  },
  {
    title: "Date Added",
    dataIndex: "created_date",
    key: "6",
    render: (date: string) => {
      return (
        <Typography variant={"body4"} color={"gray.600"}>
          {dayjs(date).format("MMMM D, YYYY")}
        </Typography>
      );
    },
  },
];

function ClientPage() {
  // getting state
  const { toggleIsCreateClientModalOpen, isClientDataRefetched } =
    useAppContext();
  // fetching
  const { data, refetch } = useQuery(["GetAllCustomer"], getAllClient);
  console.log(data);

  const [searchedClient, setSearchedClient] = useState<IClientType[]>();

  const handleSearch = (e: any) => {
    const { value } = e.target;
    if (!value) return setSearchedClient(undefined);
    setSearchedClient(
      data?.data?.filter(
        (client) =>
          client.name.toLowerCase().includes(value.toLowerCase()) ||
          client.email.toLowerCase().includes(value.toLowerCase()) ||
          client.business_address.toLowerCase().includes(value.toLowerCase()) ||
          client.customer_type.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  useEffect(() => {
    if (isClientDataRefetched) {
      refetch();
    }
  }, [isClientDataRefetched]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="flex-1 flex flex-col gap-5 p-10 max-sm:p-4 bg-color-gray min-h-screen"
    >
      <div className="!border-gray-100 !border !rounded-lg max-sm:w-[300px]">
        <div className="flex max-sm:flex-col max-sm:gap-5 justify-between px-4 py-5 bg-white">
          <Input
            onChange={handleSearch}
            className="!w-[400px]"
            placeholder="Search..."
          />
          <Button onClick={toggleIsCreateClientModalOpen}>Create Client</Button>
        </div>
        <div className="max-h-[430px] overflow-y-scroll bg-white">
          <Table
            stickyHeaderBackgroundColor={"#F0F0F4"}
            stickyHeader={true}
            columns={columns}
            dataSource={searchedClient || data?.data!}
          />
        </div>
        {!data?.data?.length && (
          <div className="text-center py-4">
            <Typography variant="body3">No Client Yet</Typography>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default ClientPage;
