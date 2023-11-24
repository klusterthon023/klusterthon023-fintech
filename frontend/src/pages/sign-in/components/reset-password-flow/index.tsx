import { Modal } from "../../../../design-system";
import { useAppContext } from "../../../../contexts";
import { useState } from "react";
import { ResetPasswordFlowEnum } from "../../types";
import ForgetPassword from "./ForgetPassword";
import VerifyToken from "./VerifyToken";
import OnSuccess from "./OnSuccess";
import ResetPassword from "./ResetPassword";
import { getDataFromLocalStorage } from "../../../../utils/helper";

const ResetPasswordFlowModal = () => {
  const { toggleIsForgetPasswordModalOpen, isForgetPasswordModalOpen } =
    useAppContext();

  const [resetPasswordFlow, setResetPasswordFlow] =
    useState<ResetPasswordFlowEnum>(ResetPasswordFlowEnum.FORGET_PASSWORD);

  const email_address = getDataFromLocalStorage("verification_email");

  const getTitleAndDescription = () => {
    switch (resetPasswordFlow) {
      case ResetPasswordFlowEnum.FORGET_PASSWORD:
        return {
          title: "Reset your password",
          description:
            "Enter the email address associated your account so we can send a link to reset your password",
        };
      case ResetPasswordFlowEnum.VERIFY_PASSWORD:
        return {
          title: "Enter verification code",
          description: `We have just sent a verification code to ${email_address}`,
        };
      case ResetPasswordFlowEnum.RESET_PASSWORD:
        return {
          title: "Create new password",
          description:
            "Please enter a new password. Make sure your new password is strong and different from the previous password",
        };
      case ResetPasswordFlowEnum.SUCCESS:
        return {
          title: "",
          description: "",
        };
      default:
        return {
          title: "Reset your password",
          description:
            "Enter the email address associated your account so we can send a link to reset your password",
        };
    }
  };

  const { title, description } = getTitleAndDescription();

  const renderStep = () => {
    switch (resetPasswordFlow) {
      case ResetPasswordFlowEnum.FORGET_PASSWORD:
        return (
          <ForgetPassword
            handleNext={() =>
              setResetPasswordFlow(ResetPasswordFlowEnum.VERIFY_PASSWORD)
            }
          />
        );
      case ResetPasswordFlowEnum.VERIFY_PASSWORD:
        return (
          <VerifyToken
            handleNext={() =>
              setResetPasswordFlow(ResetPasswordFlowEnum.RESET_PASSWORD)
            }
          />
        );
      case ResetPasswordFlowEnum.RESET_PASSWORD:
        return (
          <ResetPassword
            handleNext={() =>
              setResetPasswordFlow(ResetPasswordFlowEnum.SUCCESS)
            }
          />
        );
      case ResetPasswordFlowEnum.SUCCESS:
        return (
          <OnSuccess
            handleNext={() =>
              setResetPasswordFlow(ResetPasswordFlowEnum.FORGET_PASSWORD)
            }
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Modal
        title={title}
        showCloseButton={!!title}
        description={description}
        isModalOpen={isForgetPasswordModalOpen}
        onClose={() => {
          toggleIsForgetPasswordModalOpen();
          setResetPasswordFlow(ResetPasswordFlowEnum.FORGET_PASSWORD);
        }}
      >
        {renderStep()}
      </Modal>
    </>
  );
};

export default ResetPasswordFlowModal;
