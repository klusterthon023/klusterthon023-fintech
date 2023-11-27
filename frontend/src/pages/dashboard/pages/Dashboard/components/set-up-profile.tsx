import { useState, useEffect } from "react";
import { Typography } from "../../../../../design-system";
import close from "../../../../../assets/dashboard/close.svg";
import { getDataFromLocalStorage } from "../../../../../utils/helper";
import { useMutation } from "react-query";
import { resendEmail, updateProfile } from "../api-dashboard";
import { toast } from "react-toastify";
import AppLoadingState from "../../../../../components/loader/AppLoader";
import { useAppContext } from "../../../../../contexts";

export default function UpdateProfile() {
  const currentUserData = getDataFromLocalStorage("currentUser");
  const user = JSON.parse(currentUserData as any);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toggleIsUpdateProfileModalOpen } = useAppContext();

  function handleVerificationModel() {
    setIsOpen(!isOpen);
  }
  //   async function handleResendEmail() {
  //     setIsLoading(true);
  //     try {
  //       const data = await mutateAsync();
  //       setIsOpen(false);
  //       toast(data?.message);
  //     } catch (error) {
  //       console.error(error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  useEffect(() => {
    console.log(user);
    if (user?.active && !user?.business_name) {
      setIsOpen(true);
    }
  }, [user?.active, user?.business_name]);

  function handleUpdate() {
    toggleIsUpdateProfileModalOpen();
    setIsOpen(false);
  }

  if (isLoading) {
    return <AppLoadingState isLoading={isLoading} />;
  }

  return (
    <div
      className={`${isOpen ? "block" : "hidden"} absolute right-6 top-2
     bg-white w-80 h-auto p-5 rounded-lg border-4 border-x-0 border-b-0 border-orange-500 shadow-lg grid gap-5`}
    >
      <div className="flex items-center justify-between">
        <Typography variant="body1" className="!font-semibold">
          Update your profile!
        </Typography>
        <button
          className="p-0 border-0 bg-transparent"
          onClick={handleVerificationModel}
        >
          <img src={close} alt="close window" />
        </button>
      </div>
      <div className="flex flex-col gap-4">
        <Typography variant="body4">
          Please update your profile details to enjoy the full functionality of
          InvoiceHub.
        </Typography>
        <Typography variant="body4">
          You're one step away from sending invoices and receiving payment.
        </Typography>
      </div>
      <div>
        <button
          onClick={handleUpdate}
          className="!p-0 !outline-none !border-0 full text-blue-600 text-[14px] font-semibold"
        >
          Update profile
        </button>
      </div>
    </div>
  );
}
