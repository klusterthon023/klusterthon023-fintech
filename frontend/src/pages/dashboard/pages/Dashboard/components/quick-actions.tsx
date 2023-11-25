import { useState } from "react";
import { Button, Modal, Typography } from "../../../../../design-system";
import createClient from "../../../../../assets/dashaord/create-client.svg";
import createInvoice from "../../../../../assets/dashaord/create-invoice.svg";
import CreateClient from "./create-client";
import CreateInvoice from "./create-invoice";

export default function QuickActions() {
  const [modalClient, setModalClient] = useState(false);
  const [modalInvoice, setModalInvoice] = useState(false);

  function openModalInvoice() {
    setModalInvoice(true);
  }
  function closeModalInvoice() {
    setModalInvoice(false);
  }
  function openModalClient() {
    setModalClient(true);
  }
  function closeModalClient() {
    setModalClient(false);
  }

  return (
    <section className="flex flex-col gap-4">
      <Typography>Quick Actions</Typography>
      <div className="flex flex-col md:flex-row gap-5 w-full">
        <div className="flex gap-3 items-center w-full bg-white border border-gray-200 border-opacity-20 rounded-lg p-4">
          <Button
            size="small"
            className="!px-[1px]"
            startIcon={<img src={createClient} alt="create client" />}
            onClick={openModalClient}
          ></Button>
          <div>
            <Typography className="!text-base !font-bold">
              Create client
            </Typography>
            <Typography className="!flex !items-center gap-1 !text-gray-200 !text-xs">
              Add new customer data
            </Typography>
          </div>
        </div>
        <div className="flex gap-3 items-center w-full bg-white border border-gray-200 border-opacity-20 rounded-lg p-4">
          <Button
            size="small"
            className="!px-[1px]"
            startIcon={<img src={createInvoice} alt="create client" />}
            onClick={openModalInvoice}
          ></Button>
          <div>
            <Typography className="!text-base !font-bold">
              Create new invoice
            </Typography>
            <Typography className="!flex !items-center gap-1 !text-gray-200 !text-xs">
              Generate purchase quote for client
            </Typography>
          </div>
        </div>
      </div>
      {modalClient && (
        <div className="">
          <Modal isModalOpen={modalClient} onClose={closeModalClient}>
            <CreateClient />
          </Modal>
          <button onClick={closeModalClient}>Close Modal</button>
        </div>
      )}

      {modalInvoice && (
        <div className="">
          <Modal isModalOpen={modalInvoice} onClose={closeModalInvoice}>
            <CreateInvoice />
          </Modal>
          <button onClick={closeModalInvoice}>Close Modal</button>
        </div>
      )}
    </section>
  );
}
