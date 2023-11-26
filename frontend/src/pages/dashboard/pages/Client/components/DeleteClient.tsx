import { useMutation } from "react-query";
import { Button, Modal, Typography } from "../../../../../design-system";
import { deleteClient } from "../client-api";
import { toast } from "react-toastify";
import { useAppContext } from "../../../../../contexts";
import { useNavigate } from "react-router-dom";
import { RouteNames } from "../../../../../routers/interface";

function DeleteClient({ isDeleteModalOpen, onClose, id }: any) {
  const { mutateAsync } = useMutation(deleteClient);

  const { refetchClient } = useAppContext();

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const result = await mutateAsync(id);
      toast(result?.message);
      onClose();
      refetchClient();
      navigate(RouteNames.CLIENT);
    } catch (error) {
      console.error(error);
      toast((error as any)?.response?.data?.message);
    }
  };
  return (
    <Modal isModalOpen={isDeleteModalOpen} onClose={onClose}>
      <div className="my-9 text-center">
        <Typography variant="h5">Delete Client Profile?</Typography>
      </div>
      <div className="text-center">
        <Typography variant="body3" color="gray.200">
          This client profile will be deleted permanently and cannot be recover
          Are you sure you want to continue?
        </Typography>
      </div>
      <div className="flex w-full gap-4 justify-center items-center mt-9">
        <Button
          variant="outlined"
          className="!border !bg-transparent !text-color-red !border-color-red"
          onClick={onClose}
        >
          No, Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          className="!border-color-red !bg-color-red !text-color-white !border"
        >
          Delete
        </Button>
      </div>
    </Modal>
  );
}

export default DeleteClient;
