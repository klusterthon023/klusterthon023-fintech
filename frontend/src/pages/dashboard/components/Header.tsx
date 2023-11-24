import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input, Typography } from "../../../design-system";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="flex justify-between items-center px-10 py-2 bg-white h-[90px] w-full border-b border-color-gray">
      <Typography variant="h4">Dashboard</Typography>
      <Input
        placeholder="Search..."
        startIcon={<FontAwesomeIcon icon={faSearch} />}
      />
    </div>
  );
}

export default Header;
