import LeftSideContext from "./components/LeftSideContext";
import RightSideContext from "./components/RightSideContext";

function LoginPage() {
  return (
    <div className="flex justify-between max-lg:flex-col w-full items-center">
      <LeftSideContext />
      <RightSideContext />
    </div>
  );
}

export default LoginPage;
