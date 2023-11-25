import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { RouteNames } from "../../routers/interface";
import SideBar from "./components/SideBar";
import Layout from "./layout";
import { getDataFromLocalStorage } from "../../utils/helper";
<<<<<<< HEAD
import CreateInvoiceModal from "./pages/Invoice/components/CreateInvoiceModal";
=======
import { ToastContainer } from "react-toastify";
>>>>>>> bbc54d5 (Added react toastify)

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
<<<<<<< HEAD
    <>
      <div className="flex">
        <SideBar />
        <Layout>
          <Outlet />
          <ToastContainer />
        </Layout>
      </div>
      <CreateInvoiceModal />
    </>
=======
    <div className="flex">
      <SideBar />
      <Layout>
        <Outlet />
        <ToastContainer />
      </Layout>
    </div>
>>>>>>> bbc54d5 (Added react toastify)
  );
}

export default DashboardPage;
