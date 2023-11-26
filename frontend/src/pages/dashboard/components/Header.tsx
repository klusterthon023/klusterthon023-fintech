import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import lang from "../../../assets/dashboard/en.svg";
import notificationicon from "../../../assets/dashboard/notification-icon.svg";
import { Input, Typography } from "../../../design-system";
import { faL, faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  getDataFromLocalStorage,
  getGravatarImage,
} from "../../../utils/helper";
import { useLocation } from "react-router-dom";
import NotificationsWindow from "./notification";

function Header() {
  const currentUserData = getDataFromLocalStorage("currentUser");
  const currentUser = JSON.parse(currentUserData as any);

  const { pathname } = useLocation();
  const [openNotification, setOpenNotification] = useState(false);
  function handleNotification() {
    setOpenNotification(!openNotification);
  }

  function capitalizeFirstLetter(inputString: string) {
    return inputString.replace(/^[a-z]/, (match) => match.toUpperCase());
  }

  const title = pathname.split("/")[1];
  console.log(title);
  return (
    <div className="flex justify-between items-center px-10 max-sm:pl-6 max-sm:px-4 py-2 bg-white h-[90px] w-full border-b border-color-gray">
      <Typography variant="h5" className="max-sm:!text-lg !text-[28px]">
        {capitalizeFirstLetter(title)}
      </Typography>
      <div className="max-lg:hidden w-full mx-auto max-w-[350px]">
        <Input
          placeholder="Search..."
          startIcon={<FontAwesomeIcon icon={faSearch} />}
        />
      </div>
      <div className="flex items-center gap-2 md:gap-6">
        <img src={lang} alt="" />
        <div className="relative">
          <button onClick={handleNotification}>
            <img src={notificationicon} alt="" />
          </button>
          {openNotification && <NotificationsWindow />}
        </div>
        <img
          src={getGravatarImage(currentUser?.email! || "")}
          className="w-12 h-12 max-sm:w-8 max-sm:h-8 rounded-lg"
        />
      </div>
    </div>
  );
}

export default Header;
