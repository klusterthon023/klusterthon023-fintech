import { motion } from "framer-motion";
import { useAppContext } from "../../../../contexts";
import { Button, Input, Table, Typography } from "../../../../design-system";

type TableDataType = {
  displayName: string;
  email: string;
  role: any;
};

const columns = [
  {
    title: "Names",
    dataIndex: "displayName",
    key: "1",
    sortable: true,
    render: (name: string, _: TableDataType) => {
      return (
        <div className="flex gap-2 items-center">
          <Typography
            fontWeight={500}
            variant={"body4"}
            className="cursor-pointer"
            color={"gray.600"}
          >
            {name}
          </Typography>
        </div>
      );
    },
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "2",
    render: (email: number) => {
      return (
        <Typography variant={"body4"} color={"gray.600"}>
          {email}
        </Typography>
      );
    },
  },
];

function ClientPage() {
  const { toggleIsCreateInvoicedModalOpen } = useAppContext();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="flex-1 flex flex-col gap-5 p-10 max-sm:p-4 bg-color-gray h-screen"
    >
      <div className="!border-color-gray !border !rounded-lg">
        <div className="flex justify-between px-4 py-5 bg-white">
          <Input className="!w-[400px]" placeholder="Search..." />
          <Button onClick={toggleIsCreateInvoicedModalOpen}>
            Create Client
          </Button>
        </div>
        <Table columns={columns} dataSource={users} />
      </div>
    </motion.div>
  );
}

export default ClientPage;

const users: TableDataType[] = [
  {
    displayName: "John Doe",
    email: "john.doe@example.com",
    role: "Admin",
  },
  {
    displayName: "Jane Smith",
    email: "jane.smith@example.com",
    role: "Editor",
  },
  {
    displayName: "Bob Johnson",
    email: "bob.johnson@example.com",
    role: "Viewer",
  },
  {
    displayName: "Alice Williams",
    email: "alice.williams@example.com",
    role: "Admin",
  },
  {
    displayName: "Charlie Brown",
    email: "charlie.brown@example.com",
    role: "Editor",
  },
  {
    displayName: "Eva Davis",
    email: "eva.davis@example.com",
    role: "Viewer",
  },
  {
    displayName: "Frank Miller",
    email: "frank.miller@example.com",
    role: "Admin",
  },
  {
    displayName: "Grace Wilson",
    email: "grace.wilson@example.com",
    role: "Editor",
  },
  {
    displayName: "Henry Lee",
    email: "henry.lee@example.com",
    role: "Viewer",
  },
  {
    displayName: "Ivy Taylor",
    email: "ivy.taylor@example.com",
    role: "Admin",
  },
];
