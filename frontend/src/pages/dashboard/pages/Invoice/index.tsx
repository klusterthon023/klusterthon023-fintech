import { motion } from "framer-motion";
import { Input, Table, Typography } from "../../../../design-system";
import FirstRow from "./components/FirstRow";
import { getRecentTransactions } from "../Dashboard/api-dashboard";
import { custom_columns } from "../Dashboard/types/columns";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { IInvoice } from "../Dashboard/types";
import { useAppContext } from "../../../../contexts";

function InvoicePage() {
  const { data, refetch } = useQuery(["TRANSACTIONS"], getRecentTransactions);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [defaultInvoices, setDefaultInvoices] = useState<IInvoice[]>([]);

  const [invoicesWithClientName, setInvoicesWithClientName] = useState<
    IInvoice[]
  >([]);

  const [searchedInvoice, setSearchedInvoice] = useState<IInvoice[]>();
  const { isInvoiceDataRefetched } = useAppContext();

  const handleSearch = (e: any) => {
    const { value } = e.target;
    if (!value) return setSearchedInvoice(undefined);
    setSelectedDate(null);
    setSearchedInvoice(
      invoicesWithClientName.filter(
        (client) =>
          client.status.toLowerCase().includes(value.toLowerCase()) ||
          client.id.toLowerCase().includes(value.toLowerCase()) ||
          client.client_name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleDatePickerBlur = () => {
    setSelectedDate(null);
    setSearchedInvoice(defaultInvoices);
  };

  useEffect(() => {
    if (data?.data) {
      const newInvoicesWithClientName = data.data.map((invoice) => {
        const client_name = invoice.customers[0]?.name;
        return { ...invoice, client_name };
      });
      setDefaultInvoices(newInvoicesWithClientName);
      setInvoicesWithClientName(newInvoicesWithClientName);
    }
  }, [data]);

  useEffect(() => {
    if (selectedDate) {
      setSearchedInvoice(
        invoicesWithClientName.filter(
          (client) =>
            new Date(client.due_date).toDateString() ===
            selectedDate.toDateString()
        )
      );
    }
  }, [selectedDate]);

  useEffect(() => {
    if (isInvoiceDataRefetched) {
      refetch();
    }
  }, [isInvoiceDataRefetched]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="flex-1 flex flex-col gap-5 p-10 max-sm:p-4 bg-color-gray mx-auto min-h-screen pb-10"
    >
      <FirstRow />
      <div className="border-gray-100 bg-white border rounded-lg max-sm:max-w-[320px] ">
        <div className="px-4 py-5 flex max-sm:flex-col max-sm:gap-5 justify-between items-center">
          <div className="max-w-[280px] w-full">
            <Input
              placeholder="Search by ID, Name, Email or Status ..."
              onChange={handleSearch}
              className="w-full"
            />
          </div>
          <div className="z-50">
            <DatePicker
              placeholderText="Search by due date"
              className="py-4 h-12 border border-gray-100 text-center rounded-lg cursor-pointer outline-none"
              selected={selectedDate}
              onChange={handleDateChange}
              onBlur={handleDatePickerBlur}
            />
          </div>
        </div>
        <div className="max-h-[430px] overflow-y-scroll">
          <Table
            stickyHeaderBackgroundColor={"#F0F0F4"}
            stickyHeader={true}
            columns={custom_columns()}
            dataSource={searchedInvoice || invoicesWithClientName}
            isRowClickable={true}
          />
        </div>
        {!invoicesWithClientName.length && (
          <div className="text-center py-4">
            <Typography variant="body3">No Invoice Yet</Typography>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default InvoicePage;
