import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Typography } from "../../../design-system";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";
import { RouteNames } from "../../../routers/interface";
import logo from "../../../assets/invoice-hub-logo.svg";
import sidebarIcon from "../../../assets/dashboard/sidebarIcon.svg";
import { removeDataFromLocalStorage } from "../../../utils/helper";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ClassNames from "classnames";
import { MdDashboard, MdOutlineDashboard } from "react-icons/md";
import { IoPeopleCircle, IoPeopleCircleOutline } from "react-icons/io5";
import { RiBillFill, RiBillLine } from "react-icons/ri";
import { IoIosLogOut } from "react-icons/io";

function SideBar() {
  const TAB_LIST = [
    {
      id: 1,
      ActiveIcon: MdDashboard,
      Icon: MdOutlineDashboard,
      label: "Dashboard",
      path: RouteNames.DASHBOARD,
    },
    {
      id: 2,
      ActiveIcon: RiBillFill,
      Icon: RiBillLine,
      label: "Invoice",
      path: RouteNames.INVOICE,
    },
    {
      id: 3,
      ActiveIcon: IoPeopleCircle,
      Icon: IoPeopleCircleOutline,
      label: "Clients",
      path: RouteNames.CLIENT,
    },
  ];

  const { pathname } = useLocation();

  const navigate = useNavigate();

  const index = pathname.split("/")[0];

  const isSmallScreen = useMediaQuery({ maxWidth: 768 });

  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(isSmallScreen);

  const toggleSidebar = () => {
    if (isSmallScreen) return;
    setIsSidebarCollapsed((prevState) => !prevState);
  };

  const isActive = (itemPath: string) =>
    pathname.split("/")[1] === itemPath.split("/")[1];

  return (
    <AnimatePresence exitBeforeEnter={false} mode="wait">
      <motion.div
        initial={false}
        animate={{ width: isSidebarCollapsed ? 80 : 260 }}
        exit={{ width: 80 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className={classNames(
          `min-h-screen bg-white border-r border-color-gray  py-6 `,
          {
            ["w-20 px-3"]: isSidebarCollapsed,
            ["min-w-[260px] px-5"]: !isSidebarCollapsed,
          }
        )}
      >
        <div className={classNames("relative pb-12")}>
          <img
            src={isSidebarCollapsed ? sidebarIcon : logo}
            className={classNames("", { ["w-7"]: isSidebarCollapsed })}
            alt="invoicehub"
          />
        </div>
        <motion.div
          className={ClassNames(
            "absolute top-7 w-9 h-9 flex justify-center items-center bg-color-gray rounded-full p-2 cursor-pointer",
            {
              ["left-[240px]"]: !isSidebarCollapsed,
              ["left-[60px]"]: isSidebarCollapsed,
            }
          )}
          onClick={toggleSidebar}
          whileHover={{ scale: 1.0 }}
        >
          <motion.div>
            <FontAwesomeIcon
              icon={isSidebarCollapsed ? faChevronRight : faChevronLeft}
              fontSize={18}
              className="text-primary-600"
            />
          </motion.div>
        </motion.div>

        <div className="flex justify-between flex-col py-6">
          {TAB_LIST.map((item) => (
            <ListItem
              key={item.id}
              {...item}
              isSidebarCollapsed={isSidebarCollapsed}
              path={`${index}${item.path}`}
              active={isActive(item.path)}
            />
          ))}
        </div>
        <div
          className={classNames("absolute bottom-3 ", {
            ["w-[220px]"]: !isSidebarCollapsed,
          })}
        >
          <div
            onClick={() => {
              removeDataFromLocalStorage("currentUser");
              navigate(RouteNames.SIGN_IN);
            }}
            className={classNames(
              "flex justify-start mt-2 !items-center !w-full cursor-pointer gap-[14px] h-[52px] px-4 py-3 hover:bg-color-gray",
              "rounded-lg text-gray-400",
              { ["px-2  text-xl"]: isSidebarCollapsed }
            )}
          >
            <IoIosLogOut size={25} />
            {!isSidebarCollapsed && (
              <Typography fontWeight={400} variant={"body3"} color={"gray.400"}>
                Logout
              </Typography>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default SideBar;

interface IListItemProps {
  label: string;
  path: string;
  active: boolean;
  isSidebarCollapsed: boolean;
  Icon: any;
  ActiveIcon: any;
}

function ListItem({
  label,
  path,
  ActiveIcon,
  Icon,
  active,
  isSidebarCollapsed,
}: IListItemProps) {
  return (
    <nav className="">
      <Link to={path}>
        <div
          className={classNames(
            "flex justify-start mt-2 !items-center gap-[14px] h-[52px] px-4 py-3 hover:bg-color-gray",
            "rounded-lg text-gray-400",
            {
              ["!bg-color-primary !text-color-white"]: active,
              ["px-2 justify-center text-xl"]: isSidebarCollapsed,
            }
          )}
        >
          {active ? <ActiveIcon size={25} /> : <Icon size={25} />}
          {!isSidebarCollapsed && (
            <Typography
              fontWeight={active ? 600 : 400}
              variant={"body3"}
              color={active ? "white" : "gray.400"}
            >
              {label}
            </Typography>
          )}
        </div>
      </Link>
    </nav>
  );
}
