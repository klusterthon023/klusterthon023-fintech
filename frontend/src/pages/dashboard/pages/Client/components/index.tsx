import { motion } from "framer-motion";
import { Button, Typography } from "../../../../../design-system";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useQuery } from "react-query";
import { getClientById } from "../client-api";
import { useNavigate, useParams } from "react-router-dom";
import { RouteNames } from "../../../../../routers/interface";
import EditClient from "./EditClient";
import { useEffect, useState } from "react";
import DeleteClient from "./DeleteClient";
import RecentTransactions from "../../Dashboard/components/recent-transaction";
import { defaultClientDetails, useAppContext } from "../../../../../contexts";

export default function ClientDetails() {
  const { clientId } = useParams();
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);

  const [isDataRefetch, setIsDataRefetch] = useState<boolean>(false);

  const { data, refetch } = useQuery(["getCustomerById", clientId], () =>
    getClientById(clientId!)
  );

  const {
    toggleIsCreateInvoicedModalOpen,
    updateClientDetailsForNewTransaction,
    isCreateInvoiceModalOpen,
  } = useAppContext();

  const refetchData = () => {
    setIsDataRefetch(true);
    setTimeout(() => {
      setIsDataRefetch(false);
    }, 1000);
  };

  const navigate = useNavigate();

  const client = data?.data[0];

  useEffect(() => {
    if (isDataRefetch) {
      refetch();
    }
  }, [isDataRefetch]);

  useEffect(() => {
    if (!isCreateInvoiceModalOpen) {
      updateClientDetailsForNewTransaction(defaultClientDetails);
    }
    return () => {
      updateClientDetailsForNewTransaction(defaultClientDetails);
    };
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="flex-1 flex flex-col gap-5 p-10 max-sm:p-4 bg-color-gray min-h-screen pb-10"
      >
        <div className="flex max-sm:flex-col max-sm:gap-7 justify-between lg:items-center mb-5">
          <div className="flex  gap-4 items-center">
            <FontAwesomeIcon
              onClick={() => navigate(RouteNames.CLIENT)}
              icon={faArrowLeft}
              fontSize={24}
              className="text-gray-300 cursor-pointer"
            />
            <Typography variant="h6">{client?.name}</Typography>
          </div>
          <div className="flex gap-5 max-sm:justify-center items-center">
            <Button onClick={() => setIsEditModalOpen(true)}>Edit</Button>
            <Button
              onClick={() => setIsDeleteModalOpen(true)}
              variant="outlined"
              className="!border !bg-transparent !text-color-red !border-color-red"
            >
              Delete
            </Button>
          </div>
        </div>
        <div className="px-4 py-5 rounded-lg bg-white border border-gray-100">
          <Typography fontWeight={600} variant="body3" color="gray.100">
            CLIENT INFORMATION
          </Typography>
          <div className="flex gap-10 items-center my-4">
            <Typography className="!w-40" variant="body4" fontWeight={600}>
              Name
            </Typography>
            <Typography variant="body4">: {client?.name} </Typography>
          </div>
          <div className="flex gap-10 items-center mb-4">
            <Typography className="!w-40" variant="body4" fontWeight={600}>
              Email address
            </Typography>
            <Typography variant="body4">: {client?.email} </Typography>
          </div>
          <div className="flex gap-10 items-center mb-4">
            <Typography className="!w-40" variant="body4" fontWeight={600}>
              Type
            </Typography>
            <Typography variant="body4">: {client?.customer_type} </Typography>
          </div>
          <div className="flex gap-10 items-center mb-4">
            <Typography className="!w-40" variant="body4" fontWeight={600}>
              Phone number
            </Typography>
            <Typography variant="body4">: {client?.phone_number} </Typography>
          </div>
          <div className="flex gap-10 items-center mb-4">
            <Typography className="!w-40" variant="body4" fontWeight={600}>
              Address
            </Typography>
            <Typography variant="body4">
              : {client?.business_address}{" "}
            </Typography>
          </div>
        </div>
        <div className="bg-white">
          <div className="flex justify-between items-center mb-4 px-4 pt-5">
            <Typography fontWeight={600} variant="body3" color="gray.100">
              TRANSACTION HISTORY
            </Typography>
            <Button
              onClick={() => {
                toggleIsCreateInvoicedModalOpen();
                updateClientDetailsForNewTransaction(client!);
              }}
              variant="outlined"
            >
              New Transaction
            </Button>
          </div>
          <RecentTransactions clientId={client?._id!} />
        </div>
      </motion.div>
      <DeleteClient
        id={clientId}
        isDeleteModalOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
      />
      <EditClient
        client={client}
        id={clientId!}
        refetchData={refetchData}
        isEditModalOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
      />
    </>
  );
}
