import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { RouteNames } from "../../routers/interface";
import SideBar from "./components/SideBar";
import Layout from "./layout";
import { getDataFromLocalStorage } from "../../utils/helper";

function DashboardPage() {
  const { pathname } = useLocation();

  const navigate = useNavigate();

  const accessToken = getDataFromLocalStorage("accessToken");

  useEffect(() => {
    if (pathname === RouteNames.MAIN) {
      navigate(`${RouteNames.DASHBOARD}`, { replace: true });
    }
  }, []);

  useEffect(() => {
    if (!accessToken) {
      navigate(RouteNames.HOME, { replace: true });
    }
  }, [accessToken]);

  return (
    <div className="flex">
      <SideBar />
      <Layout>
        <Outlet />
      </Layout>
    </div>
  );
}

export default DashboardPage;
