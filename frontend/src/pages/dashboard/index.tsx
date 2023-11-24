import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { RouteNames } from "../../routers/interface";
import SideBar from "./components/SideBar";
import Layout from "./layout";

function DashboardPage() {
  const { pathname } = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === RouteNames.MAIN) {
      navigate(`${RouteNames.DASHBOARD}`, { replace: true });
    }
  }, []);

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
