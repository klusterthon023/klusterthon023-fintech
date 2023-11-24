import LeftSideContext from "./components/LeftSideContext";
import ResetPasswordFlowModal from "./components/ResetPasswordFlowModal";
import RightSideContext from "./components/RightSideContext";

function LoginPage() {
  return (
    <div className="grid lg:grid-cols-2 w-full min-h-screen">
      <LeftSideContext />
      <RightSideContext />
      <ResetPasswordFlowModal />
    </div>
  );
}

export default LoginPage;
