import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { RouteNames } from "../../routers/interface";
import SideBar from "./components/SideBar";
import Layout from "./layout";
import { getDataFromLocalStorage } from "../../utils/helper";
import CreateInvoiceModal from "./pages/Invoice/components/CreateInvoiceModal";

function DashboardPage() {
  const { pathname } = useLocation();

  const navigate = useNavigate();

  const currentUserData = getDataFromLocalStorage("currentUser");
  const currentUser = JSON.parse(currentUserData as any);

  useEffect(() => {
    if (pathname === RouteNames.MAIN) {
      navigate(`${RouteNames.DASHBOARD}`, { replace: true });
    }
  }, []);

  useEffect(() => {
    if (!currentUser) {
      navigate(RouteNames.HOME, { replace: true });
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
