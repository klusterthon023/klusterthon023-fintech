import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "../../../../../design-system";
import { useAppContext } from "../../../../../contexts";
import { getDataFromLocalStorage } from "../../../../../utils/helper";

function CreateInvoice() {
  const { toggleIsCreateInvoicedModalOpen, toggleIsUpdateProfileModalOpen } =
    useAppContext();
  const currentUserData = getDataFromLocalStorage("currentUser");
  const currentUser = JSON.parse(currentUserData as any);
  function handleCreateInvoice() {
    if (currentUser?.active && currentUser?.business_name) {
      toggleIsCreateInvoicedModalOpen();
    } else {
      toggleIsUpdateProfileModalOpen();
    }
  }
  return (
    <>
      <div
        onClick={handleCreateInvoice}
        className="p-5 cursor-pointer !h-[150px] lg:!w-full bg-color-white rounded-lg border border-color-primary flex flex-col justify-center items-center"
      >
        <div className="bg-color-primary mb-4 w-6 h-6 justify-center items-center flex text-color-white">
          <FontAwesomeIcon icon={faPlus} />
        </div>
        <Typography
          className="!mb-1"
          fontWeight={600}
          variant="body3"
          color="primary"
        >
          New Invoice
        </Typography>
        <Typography className="!text-center" variant="body5" color="gray.100">
          Generate purchase quote for client
        </Typography>
      </div>
    </>
  );
}

export default CreateInvoice;
