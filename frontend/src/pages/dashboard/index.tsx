import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { RouteNames } from "../../routers/interface";
import SideBar from "./components/SideBar";
import Layout from "./layout";
import {
  getDataFromLocalStorage,
  removeDataFromLocalStorage,
} from "../../utils/helper";
import dayjs from "dayjs";
import CreateInvoiceModal from "./pages/Invoice/components/CreateInvoiceModal";

function DashboardPage() {
  const { pathname } = useLocation();

  const navigate = useNavigate();

  const currentUserData = getDataFromLocalStorage("currentUser");
  const currentUser = JSON.parse(currentUserData as any);

  const isTokenExpired = dayjs().isAfter(
    dayjs(currentUser?.activationTokenExpire)
  );

  useEffect(() => {
    if (pathname === RouteNames.MAIN) {
      navigate(`${RouteNames.DASHBOARD}`, { replace: true });
    }
  }, []);

  useEffect(() => {
    if (!currentUser) {
      navigate(RouteNames.HOME, { replace: true });
      removeDataFromLocalStorage("currentUser");
    }
  }, [currentUser]);

  return (
    <>
      <div className="flex">
        <SideBar />
        <Layout>
          <Outlet />
        </Layout>
      </div>
      <CreateInvoiceModal />
    </>
  );
}

export default DashboardPage;
