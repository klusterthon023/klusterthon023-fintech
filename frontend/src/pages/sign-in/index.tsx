import LeftSideContext from "./components/LeftSideContext";
import RightSideContext from "./components/RightSideContext";

function LoginPage() {
  return (
    <div className="grid lg:grid-cols-2 w-full min-h-screen">
      <LeftSideContext />
      <RightSideContext />
    </div>
  );
}

export default LoginPage;
