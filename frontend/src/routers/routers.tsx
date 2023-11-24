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
} from "../pages";

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
        element: <InvoicePage />,
        path: `${RouteNames.MAIN}${RouteNames.INVOICE}`,
      },
    ],
  },
  {
    path: RouteNames.DESIGN_SYSTEM,
    element: <DesignSystem />,
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
