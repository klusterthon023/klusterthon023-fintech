import { motion } from "framer-motion";
import { Input, Table } from "../../../../design-system";
import FirstRow from "./components/FirstRow";
import { getRecentTransactions } from "../Dashboard/api-dashboard";
import { custom_columns } from "../Dashboard/types/columns";
import { useQuery } from "react-query";
import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { IInvoice } from "../Dashboard/types";

function InvoicePage() {
  const { data } = useQuery(["TRANSACTIONS"], getRecentTransactions);
  const [startDate, setStartDate] = useState(new Date());

  const [searchedInvoice, setSearchedInvoice] = useState<IInvoice[]>();

  const handleSearch = (e: any) => {
    const { value } = e.target;
    if (!value) return setSearchedInvoice(undefined);
    setSearchedInvoice(
      data?.data?.filter(
        (client) =>
          client.status.toLowerCase().includes(value.toLowerCase()) ||
          client.id.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="flex-1 flex flex-col gap-5 p-10 max-sm:p-4 bg-color-gray h-screen"
    >
      <FirstRow />
      <div className="border-gray-100 bg-white border rounded-lg">
        <div className="px-4 py-5 flex justify-between items-center">
          <Input placeholder="Search..." onChange={handleSearch} />
          <div className="z-50">
            <DatePicker
              className="py-4 h-12 border border-gray-100 text-center rounded-lg cursor-pointer outline-none"
              selected={startDate}
              onChange={(date: any) => setStartDate(date)}
            />
          </div>
        </div>
        <div className="!max-h-[430px] overflow-y-scroll">
          <Table
            stickyHeaderBackgroundColor={"#F0F0F4"}
            stickyHeader={true}
            columns={custom_columns()}
            dataSource={searchedInvoice || data?.data!}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default InvoicePage;
