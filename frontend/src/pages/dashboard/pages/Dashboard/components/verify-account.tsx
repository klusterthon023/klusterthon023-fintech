import { useState, useEffect } from "react";
import { Typography } from "../../../../../design-system";
import close from "../../../../../assets/dashboard/close.svg";
import { getDataFromLocalStorage } from "../../../../../utils/helper";
import { useMutation } from "react-query";
import { resendEmail } from "../api-dashboard";
import { toast } from "react-toastify";
import ApiLoadingState from "../../../../../components/loader/ApiLoadingState";

export default function VerifyAccount() {
  const currentUserData = getDataFromLocalStorage("currentUser");
  const user = JSON.parse(currentUserData as any);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { mutateAsync } = useMutation(resendEmail);
  function handleVerificationModel() {
    setIsOpen(!isOpen);
  }
  async function handleResendEmail() {
    setIsLoading(true);
    try {
      const data = await mutateAsync();
      setIsOpen(false);
      toast(data?.message);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    if (!user?.active) {
      setIsOpen(true);
    }
  }, [user?.active]);

  if (isLoading) {
    return <ApiLoadingState />;
  }

  return (
    <div
      className={`${isOpen ? "block" : "hidden"} absolute right-6 top-2
     bg-white w-80 h-auto p-5 rounded-lg border-4 border-x-0 border-b-0 border-orange-500 shadow-lg grid gap-5`}
    >
      <div className="flex items-center justify-between">
        <Typography variant="body1" className="!font-semibold">
          Verify you account
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
          A link has been sent to the email provided. Click on the link to
          verify that the email belongs to you
        </Typography>
        <Typography variant="body4">
          Your account will be disable after 7days if you do not verify your
          email address
        </Typography>
      </div>
      <div>
        <button
          onClick={handleResendEmail}
          className="!p-0 !outline-none !border-0 full text-blue-600 text-[14px] font-semibold"
        >
          Resend Link
        </button>
      </div>
    </div>
  );
}
