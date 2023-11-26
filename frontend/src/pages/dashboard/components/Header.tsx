import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input, Typography } from "../../../design-system";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  getDataFromLocalStorage,
  getGravatarImage,
} from "../../../utils/helper";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { Dropdown } from "../../../components/dropdown";

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
      <div className="max-md:hidden">
        <Input
          placeholder="Search..."
          startIcon={<FontAwesomeIcon icon={faSearch} />}
        />
      </div>
      <div className="flex gap-6 items-center">
        <Dropdown
          className={"!bg-color-white rounded-lg shadow-lg !p-0 !mt-10"}
          overlay={<Notifications />}
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

const Notifications = () => {
  return (
    <div className="px-5 py-6 w-[460px] max-h-[620px] overflow-y-scroll rounded-lg bg-color-white">
      <div className="flex justify-between items-center pb-3 border-b border-color-gray mb-3">
        <Typography variant="h6">Notification</Typography>
        <Typography variant="body4" color="primary">
          Mark all as read
        </Typography>
      </div>
      {NOTIFICATION_LIST.map((label) => (
        <div className="py-3 border-b border-color-gray">
          <Typography variant="body5">{label}</Typography>
        </div>
      ))}
    </div>
  );
};

const NOTIFICATION_LIST = ["Hello", "Wow", "This is the last Notification"];
