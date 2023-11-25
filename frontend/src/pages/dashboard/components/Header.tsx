import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input, Typography } from "../../../design-system";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  getDataFromLocalStorage,
  getGravatarImage,
} from "../../../utils/helper";
import { useLocation } from "react-router-dom";

function Header() {
  const currentUserData = getDataFromLocalStorage("currentUser");
  const currentUser = JSON.parse(currentUserData as any);

  const { pathname } = useLocation();

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
      <div className="max-md:hidden">
        <Input
          placeholder="Search..."
          startIcon={<FontAwesomeIcon icon={faSearch} />}
        />
      </div>
      <img
        src={getGravatarImage(currentUser?.email! || "")}
        className="w-12 h-12 max-sm:w-8 max-sm:h-8 rounded-lg"
      />
    </div>
  );
}

export default Header;
