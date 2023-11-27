import { useMutation } from "react-query";
import { useAppContext } from "../../../../../contexts";
import { Button, Modal, Typography } from "../../../../../design-system";
import { deleteInvoice } from "../invoice-api";
import AppLoadingState from "../../../../../components/loader/AppLoader";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { RouteNames } from "../../../../../routers/interface";

export default function DeleteInvoice() {
  const { invoiceId } = useParams();
  const navigate = useNavigate();
  const { isDeleteInvoiceModalOpen, toggleDeleteInvoiceModel } =
    useAppContext();
  const { mutateAsync, isLoading } = useMutation(deleteInvoice);

  if (isLoading) {
    return <AppLoadingState isLoading={isLoading} />;
  }

  async function handleDelete() {
    try {
      const result = mutateAsync(invoiceId as string);
      toast("You've sucessfully deleted the the invoice.");
      toggleDeleteInvoiceModel();
      navigate(RouteNames.INVOICE);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <section>
      <Modal
        isModalOpen={isDeleteInvoiceModalOpen}
        onClose={toggleDeleteInvoiceModel}
        showCloseButton={false}
      >
        <div className="my-9 text-center">
          <Typography variant="h5">Delete invoice?</Typography>
        </div>
        <div className="text-center">
          <Typography variant="body3" color="gray.200">
            This invoice will be deleted permanently and cannot be recovered.
            Are you sure you want to continue?
          </Typography>
        </div>
        <div className="flex w-full gap-4 justify-center items-center mt-9">
          <Button
            variant="outlined"
            className="!border !bg-transparent !text-color-red !border-color-red"
            onClick={toggleDeleteInvoiceModel}
          >
            No, Cancel
          </Button>
          <Button
            className="!border-color-red !bg-color-red !text-color-white !border"
            onClick={handleDelete}
          >
            Delete
          </Button>
        </div>
      </Modal>
    </section>
  );
}
