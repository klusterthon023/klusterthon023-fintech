import { useAppContext } from "../../../../contexts";
import { Typography, Button } from "../../../../design-system";

function OnSuccess({ handleNext }: { handleNext: () => void }) {
  const { toggleIsForgetPasswordModalOpen } = useAppContext();
  return (
    <div className="flex flex-col items-center space-y-9">
      <Typography variant="h5">
        You successfully changed your password
      </Typography>

      <Typography className="!text-center" variant="body3" color="gray.200">
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo con
      </Typography>

      <Button
        onClick={() => {
          toggleIsForgetPasswordModalOpen();
          handleNext();
        }}
        fullWidth
      >
        Back to Login
      </Button>
    </div>
  );
}

export default OnSuccess;
