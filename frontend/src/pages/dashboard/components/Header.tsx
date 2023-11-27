import lang from "../../../assets/dashboard/en.svg";
import { Typography } from "../../../design-system";
import {
  getDataFromLocalStorage,
  getGravatarImage,
} from "../../../utils/helper";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { Dropdown } from "../../../components/dropdown";
import NotificationsWindow from "./notification";

function Header() {
  const currentUserData = getDataFromLocalStorage("currentUser");
  const currentUser = JSON.parse(currentUserData as any);

  const { pathname } = useLocation();

  function capitalizeFirstLetter(inputString: string) {
    return inputString.replace(/^[a-z]/, (match) => match.toUpperCase());
  }

  const title = pathname.split("/")[1];

  return (
    <div className="flex justify-between items-center px-10 max-sm:pl-6 max-sm:px-4 py-2 bg-white h-[90px] w-full border-b border-color-gray">
      <Typography variant="h5" className="max-sm:!text-lg !text-[28px]">
        {capitalizeFirstLetter(title)}
      </Typography>
      {/* <div className="max-lg:hidden w-full mx-auto max-w-[350px]">
        <Input
          placeholder="Search..."
          startIcon={<FontAwesomeIcon icon={faSearch} />}
        />
      </div> */}
      <div className="flex gap-2 md:gap-6 items-center">
        <img src={lang} alt="" />
        <Dropdown
          overlayClassName={"!pt-5"}
          className={"!bg-color-white rounded-lg !shadow-lg !p-0"}
          overlay={<NotificationsWindow />}
          trigger={["click"]}
        >
          <div className="rounded-full cursor-pointer bg-color-gray p-2">
            <IoMdNotificationsOutline size={18} />
          </div>
        </Dropdown>
        <img
          src={getGravatarImage(currentUser?.email! || "")}
          className="w-12 h-12 max-sm:w-8 max-sm:h-8 rounded-lg"
        />
      </div>
    </div>
  );
}

export default Header;
