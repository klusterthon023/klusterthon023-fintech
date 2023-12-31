import { createBrowserRouter } from "react-router-dom";
import Root from "../App";
import { RouteNames } from "./interface";
import {
  SignUp,
  SignIn,
  Home,
  DashboardIndexPage,
  DesignSystem,
  DashboardPage,
  ClientPage,
  InvoicePage,
  ClientDetailPage,
  PaymentPage,
  InvoiceDetailPage,
} from "../pages";
import VerificationSucessfull from "../pages/account-verification/components/verification-successfull";
import VerificationFailed from "../pages/account-verification/components/verification-failed";

export const CHILDREN_ROUTES = [
  {
    path: RouteNames.SIGN_IN,
    element: <SignIn />,
  },
  {
    path: RouteNames.SIGN_UP,
    element: <SignUp />,
  },
  {
    path: RouteNames.HOME,
    element: <Home />,
  },
  {
    path: RouteNames.PAYMENT,
    element: <PaymentPage />,
  },

  {
    path: RouteNames.MAIN,
    element: <DashboardIndexPage />,
    children: [
      {
        element: <DashboardPage />,
        path: `${RouteNames.MAIN}${RouteNames.DASHBOARD}`,
      },
      {
        element: <ClientPage />,
        path: `${RouteNames.MAIN}${RouteNames.CLIENT}`,
      },
      {
        element: <ClientDetailPage />,
        path: `${RouteNames.MAIN}${RouteNames.CLIENT}/:clientId`,
      },
      {
        element: <InvoicePage />,
        path: `${RouteNames.MAIN}${RouteNames.INVOICE}`,
      },
      {
        element: <InvoiceDetailPage />,
        path: `${RouteNames.MAIN}${RouteNames.INVOICE}/:invoiceId`,
      },
    ],
  },
  {
    path: RouteNames.DESIGN_SYSTEM,
    element: <DesignSystem />,
  },
  {
    path: RouteNames.ACCOUNT_VERIFIED,
    element: <VerificationSucessfull />,
  },
  {
    path: RouteNames.ACCOUNT_NOT_VERIFIED,
    element: <VerificationFailed />,
  },
];

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: CHILDREN_ROUTES,
  },
]);
export default routers;
